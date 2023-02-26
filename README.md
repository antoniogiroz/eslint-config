# @antoniogiroz/eslint-config

This project is based on [@antfu/eslint-config](https://github.com/antfu/eslint-config#antfueslint-config) repository.

- Single quotes, semi
- Auto fix for formatting
- Designed to work with TypeScript, Vue out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config

## Usage

### Install

```sh
# npm
npm i -D eslint @antoniogiroz/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@antoniogiroz"
}
```

Or if you prefer you can point to a specific config.

> You need to add `/eslint-config-{config}`

```json
{
  "extends": "@antoniogiroz/eslint-config-react"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint . --cache",
    "lint:fix": "eslint . --fix"
  }
}
```

### TypeScript Aware Rules

Type aware rules are enabled when a `tsconfig.eslint.json` is found in the project root, which will introduce some stricter rules into your project. If you want to enable it while have no `tsconfig.eslint.json` in the project root, you can change tsconfig name by modifying `ESLINT_TSCONFIG` env. 

```js
// .eslintrc.js
process.env.ESLINT_TSCONFIG = 'tsconfig.json'
module.exports = {
  extends: '@antoniogiroz'
}
```

### Config VS Code auto fix

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
