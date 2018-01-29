import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CenterDecorator from '../../storybook/CenterDecorator';
import { Button } from '../general/Button';
import IconChat from '../general/icon/IconChat';
import Badge from './Badge';

storiesOf('Feedback / Badge', module)
  .addDecorator(CenterDecorator)
  .add(
    'with one unread',
    withInfo()(() => {
      return (
        <Button ghost>
          <Badge count={1}>
            <IconChat width="30" height="30" color="#006b94" />
          </Badge>
        </Button>
      );
    })
  )
  .add(
    'with thousands unread',
    withInfo()(() => {
      return (
        <Button ghost>
          <Badge count={9999}>
            <IconChat width="30" height="30" color="#006b94" />
          </Badge>
        </Button>
      );
    })
  )
  .add(
    'hidden',
    withInfo()(() => {
      return (
        <Button ghost>
          <Badge count={0}>
            <IconChat width="30" height="30" color="#006b94" />
          </Badge>
        </Button>
      );
    })
  )
  .add(
    'without number',
    withInfo()(() => {
      return (
        <Button ghost>
          <Badge>
            <IconChat width="30" height="30" color="#006b94" />
          </Badge>
        </Button>
      );
    })
  );
