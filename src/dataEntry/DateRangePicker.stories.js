import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import DateRangePicker from './DateRangePicker';
import CenterDecorator from '../../storybook/CenterDecorator';
import moment from 'moment';

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
    class MyComponent extends Component {
      state = {
        startDate: null,
        endDate: null,
      };

      handleChange = (name, values) => {
        this.setState(values);
        action('change')(name, values);
      };

      render() {
        return (
          <DateRangePicker
            onChange={this.handleChange}
            name="myname"
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            placeholder="Select date..."
          />
        );
      }
    }
    return <MyComponent />;
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
