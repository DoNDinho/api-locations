'use strict'
const errorHandler = (error, res) => {
	const { httpCode, code, message } = error
	logger.error(error)
	res.status(httpCode).json({ code, message })
}

module.exports = { errorHandler }
