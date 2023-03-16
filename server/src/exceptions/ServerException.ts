class ServerException extends Error {
	status: number

	constructor(status: number, message: string) {
		super(message)
		this.status = status
	}

	static BadRequest(message: string): ServerException {
		return new ServerException(400, message)
	}

	static Expired(): ServerException {
		return new ServerException(400, 'expired')
	}

	static Unauthorized(message: string): ServerException {
		return new ServerException(401, message)
	}

	static Forbidden(message: string): ServerException {
		return new ServerException(403, message)
	}

	static InternalServerError(message: string): ServerException {
		return new ServerException(500, message)
	}
}

export default ServerException
