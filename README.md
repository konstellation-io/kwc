# konstellation-web-components

Component library for Konstellation projects

![Docs][workflow-docs]
![Publish][workflow-publish]

[![NPM][npm-image]][npm-url]
[![JavaScript Style Guide][js-image]][js-url]
[![License][license-image]][license-url]

## Install

```bash
npm install --save kwc
```

or

```bash
yarn add kwc
```

## Usage

Add styles at the index of your website

```tsx
import 'kwc/dist/index.css';
```

You can now import the components directly from the library

```tsx
import React from 'react'

import Button from 'kwc'

function Example() {
  render() {
    return <Button />
  }
}
```

## Docz local deployment

In case you want to deploy the documentation site for this project you first need to install the dependencies:

```bash
yarn install
```

or

```bash
npm install
```

And then you can deploy the docs by executing this command:

```bash
yarn docz dev
```

or

```bash
npm run docz dev
```

## Development

To develop or update KWC components we need to follow the next steps:

### 1 - live build the package

Go to `kwc/packages/konstellation-web-components` and start the live build script:

```sh
yarn live-build
```

### 2 - link kwc package

In the same directory link the package:

```sh
yarn link
```

### 3 - link the package to teh dev environment

Go to the dev environment `kwc/dev-env` and link the previous package:

```sh
yarn link kwc
```

### 4 - Start the dev env application

Start the application:

```sh
yarn start
```

> Note: remember to install the dependencies first using ```yarn``` or ```yarn install```


## License

MIT © [konstellation-io](https://github.com/konstellation-io)

[workflow-docs]: https://github.com/konstellation-io/kwc/workflows/Deploy%20to%20GitHub%20Pages/badge.svg
[workflow-publish]: https://github.com/konstellation-io/kwc/workflows/Release/badge.svg
[npm-image]: https://img.shields.io/npm/v/kwc.svg
[npm-url]: https://www.npmjs.com/package/kwc
[js-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[js-url]: https://standardjs.com
[license-image]: http://img.shields.io/npm/l/konstellation-web-components.svg
[license-url]: LICENSE
