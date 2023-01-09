import jwt from 'jsonwebtoken'
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

	async saveRefreshToken(userID: string, refreshToken: string) {
		const tokenData = await Token.findOne({userID})
		if (tokenData) {
			tokenData.refreshToken = refreshToken
			return tokenData.save()
		}
		return await Token.create({userID, refreshToken})
	}
}

export default new TokenService()
