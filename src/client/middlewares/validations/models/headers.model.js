const headersSchema = {
	type: 'object',
	properties: {
		'transaction-id': {
			type: 'string',
			pattern: '^([0-9])*$',
			minLength: 1
		},
		timestamp: {
			type: 'string',
			pattern: '^(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2})*$',
			minLength: 1
		},
		channel: {
			type: 'string',
			minLength: 1
		}
	},
	required: ['transaction-id', 'timestamp', 'channel']
}

module.exports = headersSchema
