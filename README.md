# re-cy-cle

A React component library for Code Yellow.

**Note that this library is still experimental**; we're using it in one production application in Code Yellow now. A lot of components still need to be added and fine-tuned.

[**Demo / overview of all components**](https://codeyellowbv.github.io/re-cy-cle/)

## Install

```
yarn add re-cy-cle
npm i re-cy-cle --save
```

## Usage

The components are [documented in the demo](https://codeyellowbv.github.io/re-cy-cle/), in the top-right you can press "Show Info" to see all the possible props for that component.

An example:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { ReCyCleTheme, Button } from 're-cy-cle';

ReactDOM.render(
    <ReCyCleTheme>
        <Button>Foobar</Button>
    </ReCyCleTheme>,
    document.getElementById('root')
);
```

`<ReCyCleTheme />` accepts a `theme` prop. These are the available options:

```js
const theme = {
    primary: '#006b94',
    success: '#58b96b',
    warning: '#d45352',
    dark: '#4c4c4c',
    light: '#eee',
};

<ReCyCleTheme theme={theme} />
```

## Contributing

Please read the [contributing](./CONTRIBUTING.md) guide.

## Inspiration

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/)
- [Ant Design](https://ant.design/docs/react/introduce)
- [Elemental UI](http://elemental-ui.com/)
- [Material UI](http://www.material-ui.com/)
- [Semantic UI React](http://react.semantic-ui.com/introduction)
