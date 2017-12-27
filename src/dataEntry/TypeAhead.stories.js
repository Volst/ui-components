import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TypeAhead from './TypeAhead';
import { Button } from '../general/Button';
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
    value: 'lioness',
    label: 'Lioness',
  },
  {
    value: 'elephant',
    label: 'Elephant',
  },
];

storiesOf('Data Entry / TypeAhead', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <div>
          <TypeAhead
            onChange={action('change')}
            onSelect={action('select')}
            name="myname"
            options={SOME_OPTIONS}
          />
          <p>This text should be overlapped with the dropdown.</p>
        </div>
      );
    })
  )
  .add(
    'with error',
    withInfo()(() => {
      return (
        <TypeAhead
          onChange={action('change')}
          onSelect={action('select')}
          name="myname"
          options={SOME_OPTIONS}
          hasError
        />
      );
    })
  )
  .add('controlled', () => {
    class MyComponent extends Component {
      state = {
        value: '',
      };

      handleChange = value => {
        this.setState({
          value: value,
        });
        action('change')(value);
      };

      render() {
        return (
          <div>
            <TypeAhead
              onChange={this.handleChange}
              onSelect={action('select')}
              name="myname"
              options={SOME_OPTIONS}
              value={this.state.value}
            />
            <Button onClick={() => this.setState({ value: '' })}>Reset</Button>
          </div>
        );
      }
    }
    return <MyComponent />;
  })
  .add(
    'disabled',
    withInfo()(() => {
      return (
        <TypeAhead
          onChange={action('change')}
          onSelect={action('select')}
          name="myname"
          options={SOME_OPTIONS}
          disabled
        />
      );
    })
  );
