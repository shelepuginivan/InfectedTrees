import bcrypt, {genSaltSync} from 'bcrypt'
import crypto from "crypto";
import User from "../models/User";
import ServerException from "../exceptions/ServerException";
import UserDTO from "../dtos/UserDTO";
import MailService from "./MailService";
import TokenService from "./TokenService";
import tokenService from "./TokenService";

class AuthService {
	async registration(firstname: string, lastname: string, email: string, password: string) {
		const candidate = await User.findOne({email})
		if (candidate) {
			throw ServerException.BadRequest(`User with email ${email} already exists`)
		}
		const passwordHash = bcrypt.hashSync(password, genSaltSync(7))
		const accountActivationLink = `${process.env.BACKEND_HOST}/auth/activate/${crypto.randomUUID()}`
		await MailService.sendActivationMail(email, accountActivationLink)

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
}

export default new AuthService()
