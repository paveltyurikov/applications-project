# applications-project

This is a test project.

### Install

```bash
npm install --force
```

### Test

```bash
npm run test-coverage
```

## Project structure

`components/` contains reusable UI components

`constants/` contains project wide constants

`features/` contains project modules

`hooks/` contains project wide hooks

`lib/` contains project wide methods, formatters etc.

`mocks/` contains [mswjs](https://mswjs.io/) related stuff

`providers/` contains all root providers

### features/{feature-name}/ folder member example

`features/{feature-name}/api` - API requests methods

`features/{feature-name}/components` - local feature specific UI components and containers

`features/{feature-name}/contstants` - local constants

`features/{feature-name}/hooks` - local feature specific hooks

`features/{feature-name}/queryKeys` - local feature specific [react-query keys](https://react-query-v3.tanstack.com/guides/query-keys)

`features/{feature-name}/urls/api` - urls and url-getters for API requests methods

`features/{feature-name}/urls/context` - local contexts

### msw

Project uses [Mock Service Worker](Mock Service Worker) for mocks and tests
- request handlers defined in `./src/mocks/handlers/{feature-name}/`
- service worker runs only in `development` environment with initApp() in `./src/main`
- test server handlers are set in  `./src/setupTests.js` 


