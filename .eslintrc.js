module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        'quotes': ['error', 'single'], // It makes single quote mandatory for strings.
        'no-multiple-empty-lines': ['error', { 'max': 1 }]  // It does allow only 1 space line as maximum.
    }
};
