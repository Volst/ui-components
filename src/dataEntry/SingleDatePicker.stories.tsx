import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import SingleDatePicker from './SingleDatePicker';
import CenterDecorator from '../../storybook/CenterDecorator';
import * as moment from 'moment';
import { State } from 'react-powerplug';

storiesOf('Data Entry / SingleDatePicker', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <SingleDatePicker
          onChange={action('change')}
          name="myname"
          value={moment()}
        />
      );
    })
  )
  .add('controlled', () => {
    return (
      <State initial={{ value: moment('1995-01-01') }}>
        {({ state, setState }) => (
          <SingleDatePicker
            onChange={(name, value) => {
              setState({
                value: value,
              });
              action('change')(name, value);
            }}
            name="myname"
            value={state.value}
          />
        )}
      </State>
    );
  })
  .add(
    'with error',
    withInfo()(() => {
      return (
        <SingleDatePicker
          hasError
          onChange={action('change')}
          name="myname"
          value={moment()}
        />
      );
    })
  )
  .add(
    'disabled',
    withInfo()(() => {
      return (
        <SingleDatePicker
          disabled
          onChange={action('change')}
          name="myname"
          value={moment()}
        />
      );
    })
  );
