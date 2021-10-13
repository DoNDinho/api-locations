const express = require('express');
const { basePath } = require('../../business/utils/configs/api.config');
const logger = require('../../business/utils/configs/log4js.config');
const authMiddleware = require('../middlewares/authentication/authentication.middleware');
const headersValidation = require('../middlewares/validations/headers.validation');
const listCommunesService = require('../../business/services/communes/listComunnes.service');
const router = express.Router();

router.get(
	`${basePath}/v1/communes`,
	[authMiddleware, headersValidation],
	async (req, res, next) => {
		try {
			const transactionId = req.headers['transaction-id'];
			logger.addContext('transaction_id', transactionId);
			const response = await listCommunesService.getListCommunes();
			logger.info(JSON.stringify({ message: 'Lista de comunas obtenidos', data: response }));
			res.json({ data: response });
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
