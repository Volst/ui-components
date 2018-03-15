import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ActionBar from './ActionBar';
import CenterDecorator from '../../storybook/CenterDecorator';
import { Row, Col } from '../layout/Grid';
import TextInput from '../dataEntry/TextInput';
import { Button } from '../general/Button';
import { Tone } from '../PropTypes';

storiesOf('Layout / ActionBar', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <ActionBar>
          <Button tone={Tone.Light}>Cancel</Button>
          <Button>Save</Button>
        </ActionBar>
      );
    })
  )
  .add(
    'with columns',
    withInfo()(() => {
      return (
        <ActionBar>
          <Row middle="xs">
            <Col xs={6}>
              <TextInput name="text" />
            </Col>
            <Col xs={6}>
              <Button>Button</Button>
            </Col>
          </Row>
        </ActionBar>
      );
    })
  );
