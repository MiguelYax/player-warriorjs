'use strict';

module.exports = {
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module' // es6 import/export
    },
    globals: {
        baron: true,
        Ext: true,
        M5: true,
        moment: true,
        d3: true,
        Hammer: true,
        isMobile: true,
        FileAPI: true,
        M5download: true,
        mime: true,
        CryptoJS: true,
        UUID: true,
        exprEval: true,
        // Loadash
        "_": true 
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jquery: true
    },
    plugins: ['prettier'],
    rules: {
        'no-console': 'off',
        indent: [2, 4, {"SwitchCase": 1}],
        'multiline-ternary': ["error", "always-multiline"],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'none',
                // Fit code within this line limit
                printWidth: 140,
                tabWidth: 4,
                // Controls the printing of spaces inside array and objects
                bracketSpacing: true,

                // If true, puts the `>` of a multi-line jsx element at the end of
                // the last line instead of being alone on the next line
                jsxBracketSameLine: false,

                // Which parser to use. Valid options are "flow", "babylon",
                // "typescript" and "postcss".
                //
                // If CSS or TypeScript is detected in Sublime Text, the parser option
                // will always be internally overridden and set to "postcss" or
                // "typescript" respectively.
                parser: 'babylon',

                // Whether to add a semicolon at the end of every line (semi: true), or
                // only at the beginning of lines that may introduce
                // ASI failures (semi: false)
                semi: true,

                // Prettier can restrict itself to only format files that contain a
                // special comment, called a pragma, at the top of the file. This is
                // very useful when gradually transitioning large, unformatted codebases
                // to prettier.
                requirePragma: false
            }
        ]
    }
};
