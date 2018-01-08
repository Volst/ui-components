import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import FancySelect from './FancySelect';
import CenterDecorator from '../../storybook/CenterDecorator';

const SOME_OPTIONS = [
  {
    value: 1,
    label: 'Zebra',
  },
  {
    value: 2,
    label: 'Lion',
  },
  {
    value: 3,
    label: 'Lioness',
  },
  {
    value: 4,
    label: 'Elephant',
  },
  {
    value: 5,
    label: 'Parastratiosphecomyiastratiosphecomyioides',
  },
];

storiesOf('Data Entry / FancySelect', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <div>
          <FancySelect
            onChange={action('change')}
            name="myname"
            options={SOME_OPTIONS}
            value="zebra"
          />
          <p>This text should be overlapped with the dropdown.</p>
        </div>
      );
    })
  )
  .add('controlled', () => {
    class MyComponent extends Component {
      state = {
        value: '',
      };

      handleChange = (name, value) => {
        this.setState({
          value: value,
        });
        action('change')(name, value);
      };

      render() {
        return (
          <FancySelect
            onChange={this.handleChange}
            name="myname"
            options={SOME_OPTIONS}
            value={this.state.value}
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
        <FancySelect
          onChange={action('change')}
          name="myname"
          options={SOME_OPTIONS}
          hasError
        />
      );
    })
  )
  .add(
    'disabled',
    withInfo()(() => {
      return (
        <FancySelect
          onChange={action('change')}
          name="myname"
          options={SOME_OPTIONS}
          disabled
        />
      );
    })
  );
