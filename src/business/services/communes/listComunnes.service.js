const communesRepository = require('../../../data/repository/communes.repository');
const communeConverter = require('../../converter/comune.converter');

const getListCommunes = async () => {
	try {
		const listCommunes = await execute();
		return await Promise.all(
			listCommunes.map((commune) => communeConverter.communeConverter(commune))
		);
	} catch (error) {
		throw error;
	}
};

const execute = async () => {
	try {
		const result = await communesRepository.getListCommunes();
		return result;
	} catch (error) {
		throw error;
	}
};

module.exports = { getListCommunes };
