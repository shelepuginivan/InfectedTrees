import jwt, {JwtPayload} from 'jsonwebtoken'
import Token from "../models/Token";

class TokenService {
	generateTokens(payload: IUserDTO) {
		const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY as string, {expiresIn: '2h'})
		const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY as string, {expiresIn: '60d'})
		return {
			accessToken,
			refreshToken
		}
	}

	validateAccessToken(accessToken: string): JwtPayload | null {
		try {
			return jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET_KEY as string) as JwtPayload
		} catch (e) {
			return null
		}
	}

	validateRefreshToken(refreshToken: string): JwtPayload | null {
		try {
			return jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY as string) as JwtPayload
		} catch (e) {
			return null
		}
	}

	async saveRefreshToken(userID: string, refreshToken: string) {
		const tokenData = await Token.findOne({userID})
		if (tokenData) {
			tokenData.refreshToken = refreshToken
			return tokenData.save()
		}
		return await Token.create({userID, refreshToken})
	}

	async findToken(refreshToken: string) {
		return Token.findOne({refreshToken})
	}

	async removeToken(refreshToken: string): Promise<void> {
		await Token.findOneAndDelete({refreshToken})
	}
}

export default new TokenService()
