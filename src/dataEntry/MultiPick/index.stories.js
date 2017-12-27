import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import CenterDecorator from '../../../storybook/CenterDecorator';
import MultiPick from './index';

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
    class MyComponent extends Component {
      state = {
        value: [1, 3],
      };

      handleChange = value => {
        this.setState({ value });
        action('change');
      };

      render() {
        return (
          <MultiPick
            options={SOME_DATA}
            value={this.state.value}
            onChange={this.handleChange}
          />
        );
      }
    }
    return <MyComponent />;
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
    class MyComponent extends Component {
      state = {
        value: [],
      };

      handleChange = value => {
        this.setState({ value });
        action('change');
      };

      render() {
        return (
          <MultiPick
            options={MORE_DATA}
            value={this.state.value}
            searchAppearsAfterCount={5}
            onChange={this.handleChange}
          />
        );
      }
    }
    return <MyComponent />;
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
