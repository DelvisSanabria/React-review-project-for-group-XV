import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    "extends": [
      "standard",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended"
    ],
    "plugins": ["react", "react-hooks"],
    "env": {
      "browser": true,
      "es2021": true
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "rules": {
      "react/react-in-jsx-scope": "off" 
    }
  }  
];