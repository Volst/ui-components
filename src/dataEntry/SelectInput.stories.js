import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import SelectInput from './SelectInput';
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
];

storiesOf('Data Entry / SelectInput', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <SelectInput
          onChange={action('change')}
          name="myname"
          options={SOME_OPTIONS}
          value="zebra"
        />
      );
    })
  )
  .add(
    'with error',
    withInfo()(() => {
      return (
        <SelectInput
          hasError
          onChange={action('change')}
          name="myname"
          options={SOME_OPTIONS}
          value="zebra"
        />
      );
    })
  )
  .add(
    'disabled',
    withInfo()(() => {
      return (
        <SelectInput
          disabled
          onChange={action('change')}
          name="myname"
          options={SOME_OPTIONS}
          value="zebra"
        />
      );
    })
  );
