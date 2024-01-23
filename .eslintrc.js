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
        'quotes': ['error', 'single'], // Tüm stringler için tek tırnak kullanımını zorunlu kılar.
        'no-multiple-empty-lines': ['error', { 'max': 1 }]  // Maksimum 1 ardışık boş satıra izin verir.
    }
};
