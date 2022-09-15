module.exports = {
	env: {
		node: true,
		es2021: true
	},
	extends: ['eslint:recommended', 'plugin:vue/recommended', '@vue/airbnb', 'prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'warn',
		'vue/no-deprecated-slot-attribute': 'off',
		'vue/multi-word-component-names': [
			'error',
			{
				ignores: ['Index', 'Home', 'About']
			}
		]
	}
};
