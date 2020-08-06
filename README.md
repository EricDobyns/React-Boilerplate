# React Boilerplate

This repository contains a boilerplate for static React site using Next.js and Typescript with minimal dependencies.

- [x] Hot-Reloading in development
- [x] Automatic routing
- [x] Automatic code splitting
- [x] Static site generation
- [x] Typescript support
- [x] Offline support
- [x] PWA support
- [x] Multi-language support
- [x] Unit test support

<br>

## Getting Started

Install all dependencies
``` bash
npm i
```

Run locally with hot reloading
``` bash
npm start
```

Run locally as static production build (Requires serve dependency)
``` bash
npm run serve
```

Analyze bundle
``` bash
npm run analyze
```

Remove temporary files and directories
``` bash
npm run clean
```

Lint project files
``` bash
npm run lint
```

Run unit tests
``` bash
npm test
```

Generate unit test coverage report
``` bash
npm run test:coverage
```

Build project files
``` bash
npm run build
```

Package static files
``` bash
npm run package
```

Deploy to S3 - Requires AWS-CLI, See ./scripts/uploadToS3.sh for details
``` bash
npm run deploy
```

<br>

## Project Structure

### `/components`

React components which could be reused in multiple pages or are complex enough to move them to another file and test them individually.

### `/lib`

Internal code that can be reused and is not specific to an individual project such as apis, contexts, hooks, middleware, utilities, etc.

### `/pages`

In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. Each page is associated with a route based on its file name.

### `/public`

Next.js can serve static files, like images, under a folder called public in the root directory. Files inside public can then be referenced by your code starting from the base URL (/)

### `/scripts`

Miscellaneous scripts used for tooling, automation, deployments, etc.

<br>

## Code of Conduct
Please see the [code of conduct](./.github/code_of_conduct.md) form.

## Contributing
Please see the [contributing](./.github/code_of_conduct.md) form.

## Pull Requests
Please see the [pull request](./.github/code_of_conduct.md) form.

## License
Copyright © 2019-present Eric Dobyns.