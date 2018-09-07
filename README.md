# Volst UI Components

A React component library for Volst.

[**Demo / overview of all components**](https://volst.github.io/ui-components/)

## Install

```
yarn add @volst/ui-components
npm i @volst/ui-components --save
```

## Usage

The components are [documented in the demo](https://volst.github.io/ui-components/), in the top-right you can press "Show Info" to see all the possible props for that component.

An example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { VolstTheme, Button } from '@volst/ui-components';

ReactDOM.render(
    <VolstTheme>
        <Button>Foobar</Button>
    </VolstTheme>,
    document.getElementById('root')
);
```

`<VolstTheme />` accepts a `theme` prop, which can be used to change some project-wide settings. An example:

```jsx
const theme = {
    primaryColor: '#006b94',
};

<VolstTheme theme={theme} />
```

See [all settings](https://github.com/Volst/ui-components/blob/master/src/config.js).

## Contributing

Please read the [contributing](./CONTRIBUTING.md) guide.

## Inspiration

- [SEEK Style Guide](https://seek-oss.github.io/seek-style-guide/)
- [Ant Design](https://ant.design/docs/react/introduce)
- [Elemental UI](http://elemental-ui.com/)
- [Material UI](http://www.material-ui.com/)
- [Semantic UI React](http://react.semantic-ui.com/introduction)
- [Blueprint](https://blueprintjs.com/)
