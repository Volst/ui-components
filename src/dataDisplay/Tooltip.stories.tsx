import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Tooltip from './Tooltip';
import IconInfo from '../general/icon/IconInfo';
import CenterDecorator from '../../storybook/CenterDecorator';

storiesOf('Data Display / Tooltip', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <Tooltip
          message="Hey, I am a message from a tooltip"
          direction="bottom"
        >
          <IconInfo />
        </Tooltip>
      );
    })
  )
  .add(
    'with long paragraph',
    withInfo()(() => {
      return (
        <Tooltip
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          direction="bottomRight"
        >
          <IconInfo />
        </Tooltip>
      );
    })
  );
