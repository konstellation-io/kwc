# konstellation-web-components

> Components library for Konstellation projects

[![NPM](https://img.shields.io/npm/v/konstellation-web-components.svg)](https://www.npmjs.com/package/konstellation-web-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save konstellation-web-components
```

or

```bash
yarn add konstellation-web-components
```

## Usage

Add styles at the index of your website

```tsx
import 'konstellation-web-components/dist/index.css'
```

You can now import the components directly from the library

```tsx
import React from 'react'

import Button from 'konstellation-web-components'

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

## License

MIT © [konstellation-io](https://github.com/konstellation-io)
