const communeConverter = (commune) => {
	return {
		code: commune.ID_COMUNA, // ID_COMUNA
		description: commune.DESCRIPCION // DESCRIPCION
	};
};

module.exports = { communeConverter };
