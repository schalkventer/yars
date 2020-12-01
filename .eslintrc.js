module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:sonarjs/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-app",
    "prettier",
    "jest",
    "compat",
    "sonarjs",
    "optimize-regex",
    "react-hooks",
  ],
  env: {
    "jest/globals": true,
    browser: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-warning-comments": [
      1,
      { terms: ["todo", "fixme"], location: "anywhere" },
    ],
    "react/jsx-one-expression-per-line": "off", // Conflicts with Prettier.
    "react/prop-types": "off", // Not needed when using TypeScript.
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }], // Enforce TypeScript for JSX. I.e. `.tsx.` over `.jsx`.
    "react/jsx-wrap-multilines": "off",
    "react/jsx-curly-newline": "off",
    "import/prefer-default-export": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/extensions": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "sonarjs/cognitive-complexity": ["warn", 20],
    "sonarjs/no-duplicate-string": "warn",
    "import/no-extraneous-dependencies": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
}
