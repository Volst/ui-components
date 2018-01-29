import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TextInput from './TextInput';
import FormField from './FormField';
import CenterDecorator from '../../storybook/CenterDecorator';

storiesOf('Data Entry / FormField', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <FormField label="Your name">
          <TextInput onChange={action('change')} name="myname" />
        </FormField>
      );
    })
  )
  .add(
    'required',
    withInfo()(() => {
      return (
        <FormField label="Your name" required>
          <TextInput onChange={action('change')} name="myname" />
        </FormField>
      );
    })
  )
  .add(
    'help text',
    withInfo()(() => {
      return (
        <FormField label="Your name" helpText="A real name">
          <TextInput onChange={action('change')} name="myname" />
        </FormField>
      );
    })
  )
  .add(
    'errors',
    withInfo()(() => {
      return (
        <FormField label="Your name" error={['required']}>
          <TextInput onChange={action('change')} name="myname" />
        </FormField>
      );
    })
  );
