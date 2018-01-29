import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TypeAhead from './TypeAhead';
import { Button } from '../general/Button';
import CenterDecorator from '../../storybook/CenterDecorator';
import { State } from 'react-powerplug';

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
    return (
      <State initial={{ value: '' }}>
        {({ state, setState }) => (
          <div>
            <TypeAhead
              onChange={(name, value) => {
                setState({
                  value: value,
                });
                action('change')(name, value);
              }}
              onSelect={action('select')}
              name="myname"
              options={SOME_OPTIONS}
              value={state.value}
            />
            <Button onClick={() => setState({ value: '' })}>Reset</Button>
          </div>
        )}
      </State>
    );
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
