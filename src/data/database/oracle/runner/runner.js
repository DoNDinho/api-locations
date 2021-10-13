const OracleRunner = require('./oracleRunner')

class Runner {
	constructor() {
		this.strategy = new OracleRunner()
	}

	async runProcedure(procedure) {
		return await this.strategy.runProcedure(procedure)
	}

	async runCursorProcedure(procedure) {
		return await this.strategy.runCursorProcedure(procedure)
	}
}

module.exports = Runner
