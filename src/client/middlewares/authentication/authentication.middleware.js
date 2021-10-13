'use strict'
const express = require('express')
const authMiddleware = express.Router()
const jwt = require('jsonwebtoken')

authMiddleware.use((req, res, next) => {
	const token = req.headers.authorization

	if (token) {
		try {
			const tokenValidate = token.replace('Bearer ', '')
			jwt.verify(tokenValidate, process.env.JWT_SIGNATURE)
			next()
		} catch (error) {
			throw { httpCode: 401, code: '401', message: error.message }
		}
	} else {
		throw { httpCode: 401, code: '401', message: 'Autenticación requerida' }
	}
})

module.exports = authMiddleware
