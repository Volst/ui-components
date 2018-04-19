import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CenterDecorator from '../../storybook/CenterDecorator';
import Loader from './Loader';

storiesOf('Feedback / Loader', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return <Loader show />;
    })
  )
  .add(
    'delay',
    withInfo()(() => {
      return <Loader delay show />;
    })
  )
  .add(
    'custom delay',
    withInfo()(() => {
      return <Loader delay={1000} show />;
    })
  );
