# applications-project

This is a test project.

### Installation

```
npm install
```
### Running tests

```
npm run test
```

with coverage
```
npm run test-coverage
```

## Project structure

`components/` contains reusable UI components

`constants/` contains project wide constants

`features/` contains project modules

`hooks/` contains project wide hooks

`lib/` contains project wide methods, formatters etc.

`providers/` contains all root providers

### features/{feature-name}/components folder member example

`features/{feature-name}/components` - local feature specific UI components and containers

`features/{feature-name}/components/FancyButton/index.js` - component index with default exported FancyButton 

`features/{feature-name}/components/FancyButton/FancyButton.jsx` - component

`features/{feature-name}/components/FancyButton/FancyButton.test.jsx` - component test


