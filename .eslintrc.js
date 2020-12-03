module.exports = {
    'env': {
        'es2021': true,
        'node': true,
    },
    'extends': [
        'google',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module',
    },
    'plugins': [
        '@typescript-eslint',
    ],
    'rules': {
		'indent': ['tab', 4],
        'max-len': ['off'],
    },
};
