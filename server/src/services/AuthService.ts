import bcrypt, {genSaltSync} from 'bcrypt'
import crypto from 'crypto'
import User from '../models/User'
import ServerException from '../exceptions/ServerException'
import UserDTO from '../dtos/UserDTO'
import MailService from './MailService'
import TokenService from './TokenService'
import tokenService from './TokenService'
import {JwtPayload} from 'jsonwebtoken'

class AuthService {
	async registration(firstname: string, lastname: string, email: string, password: string) {
		const candidate = await User.findOne({email})
		if (candidate) {
			throw ServerException.BadRequest(`User with email ${email} already exists`)
		}
		const passwordHash = bcrypt.hashSync(password, genSaltSync(7))
		const accountActivationLink = `${process.env.SERVER_HOST}/auth/activate/${crypto.randomUUID()}`
		// TODO: fix MailService.sendActivationMail method
		// await MailService.sendActivationMail(email, accountActivationLink)

		const user = await User.create({
			firstname,
			lastname,
			email,
			password: passwordHash,
			activationLink: accountActivationLink
		})

		const newUserDTO = new UserDTO(user)
		const tokens = TokenService.generateTokens({...newUserDTO})
		await tokenService.saveRefreshToken(user._id as string, tokens.refreshToken)

		return {
			...tokens,
			user: newUserDTO
		}
	}

	async login(email: string, password: string) {
		const user = await User.findOne({email})
		if (!user) {
			throw ServerException.BadRequest(`User with email ${email} not found`)
		} else if (!bcrypt.compareSync(password, user.password)) {
			throw ServerException.BadRequest('Wrong password')
		}
		const userDTO: UserDTO = new UserDTO(user)
		const tokens = TokenService.generateTokens({...userDTO})
		await tokenService.saveRefreshToken(userDTO.id, tokens.refreshToken)

		return {
			...tokens,
			user: userDTO
		}
	}

	async activateAccount(uuid: string) {
		const activationLink = `${process.env.SERVER_HOST}/auth/activate/${uuid}`
		const user = await User.findOne({activationLink})
		if (!user) {
			throw ServerException.BadRequest('Invalid activation link')
		}
		user.isActivated = true
		return user.save()
	}

	async refresh(refreshToken?: string) {
		if (!refreshToken) {
			throw ServerException.Unauthorized('refresh token not provided')
		}
		const userData = TokenService.validateRefreshToken(refreshToken)
		const tokenFromDatabase = await TokenService.findToken(refreshToken)
		if (!userData || !tokenFromDatabase) {
			throw ServerException.Unauthorized('Invalid refresh token')
		}
		const user = await User.findById((userData as JwtPayload).id)
		const userDTO: UserDTO = new UserDTO(user)
		const accessToken = TokenService.generateAccessToken(userDTO)

		return {
			accessToken,
			user: userDTO
		}
	}
}

export default new AuthService()
