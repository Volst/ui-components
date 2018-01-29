import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import DateRangePicker from './DateRangePicker';
import CenterDecorator from '../../storybook/CenterDecorator';
import * as moment from 'moment';
import { State } from 'react-powerplug';

storiesOf('Data Entry / DateRangePicker', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <DateRangePicker
          onChange={action('change')}
          name="myname"
          startDate={moment('2017-01-01')}
          endDate={moment('2017-02-20')}
        />
      );
    })
  )
  .add('controlled', () => {
    return (
      <State
        initial={{
          startDate: null,
          endDate: null,
        }}
      >
        {({ state, setState }) => (
          <DateRangePicker
            onChange={(name, values) => {
              setState(values);
              action('change')(name, values);
            }}
            name="myname"
            startDate={state.startDate}
            endDate={state.endDate}
            placeholder="Select date..."
          />
        )}
      </State>
    );
  })
  .add(
    'with error',
    withInfo()(() => {
      return (
        <DateRangePicker
          hasError
          onChange={action('change')}
          name="myname"
          startDate={moment()}
          endDate={moment()}
        />
      );
    })
  )
  .add(
    'disabled',
    withInfo()(() => {
      return (
        <DateRangePicker
          disabled
          onChange={action('change')}
          name="myname"
          startDate={moment()}
          endDate={moment()}
        />
      );
    })
  );
