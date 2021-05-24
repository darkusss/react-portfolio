module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    plugins: [
        "babel",
    ],
    extends: [
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    rules: {
        "babel/camelcase": 1,
        "babel/no-invalid-this": 1,
        "babel/object-curly-spacing": ["error", "always"],
        "babel/quotes": ["error", "single"],
        "babel/semi": ["error", "always"],
        "babel/no-unused-expressions": 1,
        "babel/valid-typeof": 1
    },
};
