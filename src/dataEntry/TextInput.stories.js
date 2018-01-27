import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { State } from 'react-powerplug';
import TextInput from './TextInput';
import CenterDecorator from '../../storybook/CenterDecorator';

storiesOf('Data Entry / TextInput', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return <TextInput onChange={action('change')} name="myname" />;
    })
  )
  .add(
    'with error',
    withInfo()(() => {
      return <TextInput onChange={action('change')} name="myname" hasError />;
    })
  )
  .add(
    'disabled',
    withInfo()(() => {
      return <TextInput onChange={action('change')} name="myname" disabled />;
    })
  )
  .add(
    'without browser autoComplete',
    withInfo()(() => {
      return (
        <div>
          <TextInput
            onChange={action('change')}
            name="myname"
            autoComplete={false}
          />
          <p>
            Make sure you have your browsers auto-fill feature enabled. It
            should be disabled for this field.
          </p>
        </div>
      );
    })
  )
  .add(
    'without browser spellCheck',
    withInfo()(() => {
      return (
        <div>
          <State initial={{ value: '' }}>
            {({ state, setState }) => (
              <TextInput
                onChange={(name, value) => setState({ value })}
                name="myname"
                value={state.value}
                spellCheck={false}
              />
            )}
          </State>
          <p>
            Make sure you have your operating system's auto-correct enabled. It
            should be disabled for this field.
          </p>
        </div>
      );
    })
  );
