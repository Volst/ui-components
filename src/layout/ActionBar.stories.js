import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import ActionBar from './ActionBar';
import CenterDecorator from '../../storybook/CenterDecorator';
import { Row, Col } from '../layout/Grid';
import TextInput from '../dataEntry/TextInput';
import { Button } from '../general/Button';

storiesOf('Layout / ActionBar', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <ActionBar>
          <Row>
            <Col xs={6}>
              <TextInput />
            </Col>
            <Col xs={6}>
              <Row end="xs">
                <Col xs={12}>
                  <Button>Button</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </ActionBar>
      );
    })
  );
