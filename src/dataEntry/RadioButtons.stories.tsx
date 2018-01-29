import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import RadioButtons from './RadioButtons';
import CenterDecorator from '../../storybook/CenterDecorator';

const SOME_OPTIONS = [
  {
    value: 'zebra',
    label: 'Zebra',
  },
  {
    value: 'lion',
    label: 'Lion',
  },
  {
    value: 'elephant',
    label: 'Elephant',
  },
];

storiesOf('Data Entry / RadioButtons', module)
  .addDecorator(CenterDecorator)
  .add(
    'horizontal',
    withInfo()(() => {
      return (
        <RadioButtons
          onChange={action('change')}
          name="myname"
          options={SOME_OPTIONS}
          value="zebra"
        />
      );
    })
  )
  .add(
    'vertical',
    withInfo()(() => {
      return (
        <RadioButtons
          onChange={action('change')}
          name="myname"
          options={SOME_OPTIONS}
          value="zebra"
          vertical
        />
      );
    })
  )
  .add(
    'disabled',
    withInfo()(() => {
      return (
        <RadioButtons
          disabled
          onChange={action('change')}
          name="myname"
          options={SOME_OPTIONS}
          value="zebra"
        />
      );
    })
  );
