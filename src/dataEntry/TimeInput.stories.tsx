import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TimeInput from './TimeInput';
import CenterDecorator from '../../storybook/CenterDecorator';
import moment from 'moment';

storiesOf('Data Entry / TimeInput', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <TimeInput onChange={action('change')} name="myname" value={moment()} />
      );
    })
  )
  .add(
    'without value',
    withInfo()(() => {
      return <TimeInput onChange={action('change')} name="myname" />;
    })
  )
  .add(
    'with error',
    withInfo()(() => {
      return <TimeInput onChange={action('change')} name="myname" hasError />;
    })
  )
  .add(
    'disabled',
    withInfo()(() => {
      return <TimeInput onChange={action('change')} name="myname" disabled />;
    })
  );
