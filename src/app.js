'use strict';
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const swaggerDocument = YAML.load(path.resolve(__dirname, './api/swagger.yaml'));
require('dotenv').config();
const bodyParser = require('body-parser');
global.logger = require('./business/utils/configs/log4js.config');
const healthRoute = require('./client/routes/health');
const communesRoute = require('./client/routes/commune.routes');
const { errorHandler } = require('./client/middlewares/error-handler/error-handler');
const port = process.env.PORT;

const app = express();

// Configurando middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurando rutas
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(healthRoute);
app.use(communesRoute);
app.use(async (err, req, res, next) => {
	await errorHandler(err, res);
});

// Iniciando servidor
app.listen(port, () => {
	logger.info('Servidor en puerto', port);
});
