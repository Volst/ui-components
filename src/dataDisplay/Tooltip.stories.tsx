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
  );
