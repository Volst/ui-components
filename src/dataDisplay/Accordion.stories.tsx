import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordion';
import { Button } from '../general/Button';
import IconDelete from '../general/icon/IconDelete';
import CenterDecorator from '../../storybook/CenterDecorator';

storiesOf('Data Display / Accordion', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <div>
          <Accordion
            title="Closed one"
            opened={false}
            onChange={action('open')}
          >
            Some hidden content.
          </Accordion>
          <Accordion title="Opened one" opened onChange={action('open')}>
            Some visible content bla bla, just filling the line so we can see it
            wraps properly.
          </Accordion>
        </div>
      );
    })
  )
  .add(
    'with custom background',
    withInfo()(() => {
      return (
        <div>
          <Accordion
            title="Closed one"
            opened={false}
            onChange={action('open')}
            contentBackground="#BADA55"
          >
            Some hidden content.
          </Accordion>
          <Accordion
            title="Opened one"
            opened
            onChange={action('open')}
            contentBackground="#BADA55"
          >
            Some visible content bla bla, just filling the line so we can see it
            wraps properly.
          </Accordion>
        </div>
      );
    })
  )
  .add(
    'with delete actions',
    withInfo()(() => {
      const actionComponent = (
        <Button onClick={action('deleted')} ghost>
          <IconDelete color="#DE0000" />
        </Button>
      );
      return (
        <div>
          <Accordion
            title="Closed one"
            opened={false}
            onChange={action('open')}
            action={actionComponent}
          >
            Some hidden content.
          </Accordion>
          <Accordion
            title="Opened one"
            opened
            onChange={action('open')}
            action={actionComponent}
          >
            Some visible content bla bla, just filling the line so we can see it
            wraps properly.
          </Accordion>
        </div>
      );
    })
  );
