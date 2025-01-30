# eslint-plugin-react-data-cy

## Overview
This ESLint plugin enforces the presence of a `data-cy` attribute (or other specified test attributes) on specified React components to improve end-to-end (E2E) testing practices.

## Installation
To install the plugin, run:

```sh
npm install --save-dev eslint-plugin-react-data-cy
```

or

```sh
yarn add -D eslint-plugin-react-data-cy
```

## Usage

### Enable the Plugin
Add `react-data-cy` to your ESLint configuration:

```json
{
  "extends": ["plugin:react-data-cy/recommended"]
}
```

or manually configure the rule:

```json
{
  "plugins": ["react-data-cy"],
  "rules": {
    "react-data-cy/react-data-cy-rule": "error"
  }
}
```

## Rule Configuration
The rule accepts an optional configuration object:

```json
{
  "rules": {
    "react-data-cy/react-data-cy-rule": [
      "error",
      {
        "testAttributes": ["data-cy", "data-testid"],
        "components": ["Button", "Input", "*"]
      }
    ]
  }
}
```

### Options
- `testAttributes` (array, optional): List of valid test attributes (default: `['data-cy']`).
- `components` (array, optional): List of components to enforce the rule on. Supports `"*"` to apply to all components.

### Example Code
#### ✅ Correct Usage
```jsx
<Button data-cy="submit-button" />
<Input data-testid="username-input" />
```

#### ❌ Incorrect Usage
```jsx
<Button />  // ❌ Missing required test attribute
<Input />  // ❌ Missing required test attribute
```

## License
MIT

