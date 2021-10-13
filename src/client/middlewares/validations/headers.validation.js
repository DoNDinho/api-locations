'use strict'
const express = require('express')
const headersValidation = express.Router()
const Ajv = require('ajv')
const headersSchema = require('./models/headers.model')

headersValidation.use((req, res, next) => {
	const headers = req.headers
	const ajv = new Ajv()
	const validate = ajv.compile(headersSchema)
	const valid = validate(headers)

	logger.info('Validando headers')
	if (valid) {
		logger.info('Headers validos')
		next()
	} else {
		logger.error(`Headers invalidos - ${validate.errors[0].message}`)
		res.status(400).json({
			code: '400',
			message: validate.errors[0].message
		})
	}
})

module.exports = headersValidation
