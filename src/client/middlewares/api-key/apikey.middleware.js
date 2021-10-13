'use strict'
const express = require('express')
const logger = require('../../../business/utils/configs/log4js.config')
const apiKeyMiddleware = express.Router()
const apiKey = process.env['X-API-KEY']

apiKeyMiddleware.use((req, res, next) => {
	const headerApiKey = req.headers['x-api-key']

	if (headerApiKey === apiKey) {
		next()
	} else {
		logger.error('x-api-key invalido')
		res.status(401).json({
			code: '401',
			message: 'x-api-key invalido'
		})
	}
})

module.exports = apiKeyMiddleware
