import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Checkbox from './Checkbox';
import CenterDecorator from '../../storybook/CenterDecorator';

storiesOf('Data Entry / Checkbox', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <form>
          <Checkbox
            onChange={action('change')}
            label="Zebra"
            name="animals"
            value={true}
          />
          <Checkbox
            onChange={action('change')}
            name="animals"
            label="Lion"
            value={false}
          />
        </form>
      );
    })
  )
  .add('disabled', () => {
    return (
      <Checkbox
        disabled
        onChange={action('change')}
        name="animals"
        label="Zebra"
        value={true}
      />
    );
  });
