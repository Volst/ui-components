import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import MultiSelect from './MultiSelect';
import CenterDecorator from '../../storybook/CenterDecorator';
import { State } from 'react-powerplug';

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
    return (
      <State initial={{ value: [2] }}>
        {({ state, setState }) => (
          <MultiSelect
            onChange={(name, value) => {
              setState({
                value: value,
              });
              action('change')(name, value);
            }}
            name="myname"
            options={SOME_OPTIONS}
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
  )
  .add(
    'placeholder',
    withInfo()(() => {
      return (
        <MultiSelect
          onChange={action('change')}
          placeholder="Which animal?"
          name="myname"
          options={SOME_OPTIONS}
          value={[]}
        />
      );
    })
  );
