import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import MultiSelect from './MultiSelect';
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

storiesOf('Data Entry / MultiSelect', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <MultiSelect
          onChange={action('change')}
          name="myname"
          options={SOME_OPTIONS}
          value={[2, 3]}
        />
      );
    })
  )
  .add('controlled', () => {
    class MyComponent extends Component {
      state = {
        value: [2],
      };

      handleChange = (name, value) => {
        this.setState({
          value: value,
        });
        action('change')(name, value);
      };

      render() {
        return (
          <MultiSelect
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
        <MultiSelect
          onChange={action('change')}
          name="myname"
          options={SOME_OPTIONS}
          hasError
          value={[2]}
        />
      );
    })
  )
  .add(
    'disabled',
    withInfo()(() => {
      return (
        <MultiSelect
          onChange={action('change')}
          name="myname"
          options={SOME_OPTIONS}
          disabled
          value={[2]}
        />
      );
    })
  );
