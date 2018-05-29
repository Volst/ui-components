import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import CenterDecorator from '../../../storybook/CenterDecorator';
import MultiPick from './index';
import { State } from 'react-powerplug';

const SOME_DATA = [
  {
    value: 1,
    label: 'Dinosaurus',
  },
  {
    value: 2,
    label: 'Butterflies',
  },
  {
    value: 3,
    label: 'Giraffes',
  },
];

const MORE_DATA = [
  ...SOME_DATA,
  {
    value: 4,
    label: 'Roger',
  },
  {
    value: 5,
    label: 'Monkeys',
  },
];

storiesOf('Data Entry / MultiPick', module)
  .addDecorator(CenterDecorator)
  .add('controlled', () => {
    return (
      <State
        initial={{
          value: [1, 3],
        }}
      >
        {({ state, setState }) => (
          <MultiPick
            options={SOME_DATA}
            value={state.value}
            onChange={value => {
              setState({ value });
              action('change');
            }}
          />
        )}
      </State>
    );
  })
  .add(
    'without any selections',
    withInfo()(() => {
      return (
        <MultiPick options={SOME_DATA} onChange={action('change')} value={[]} />
      );
    })
  )
  .add('with searchbar', () => {
    return (
      <State initial={{ value: [] }}>
        {({ state, setState }) => (
          <MultiPick
            options={MORE_DATA}
            value={state.value}
            searchAppearsAfterCount={5}
            onChange={value => {
              setState({ value });
              action('change');
            }}
          />
        )}
      </State>
    );
  })
  .add('disabled', () => {
    return (
      <MultiPick
        disabled
        options={SOME_DATA}
        onChange={action('change')}
        value={[]}
      />
    );
  })
  .add('with localized text', () => {
    return (
      <MultiPick
        options={SOME_DATA}
        value={[1]}
        onChange={action('change')}
        searchPlaceholder="Zoeken…"
        selectedText="$1 van de $2 geselecteerd"
        noneSelectedText="Geen geselecteerd"
        selectAllText="Alles"
        selectNoneText="Niks"
      />
    );
  });
