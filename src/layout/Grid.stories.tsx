import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FullDecorator from '../../storybook/FullDecorator';
import { Grid, Col, Row } from './Grid';

storiesOf('Layout / Grid', module)
  .addDecorator(FullDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <Grid>
          <Row>
            <Col xs={1}>Column 1 (1/6 of the width)</Col>
            <Col xs={2}>Column 2 (2/6 of the width)</Col>
            <Col xs={3}>Column 3 (3/6 of the width)</Col>
          </Row>
        </Grid>
      );
    })
  );
