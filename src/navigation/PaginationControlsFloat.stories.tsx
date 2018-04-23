import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import PaginationControlsFloat from './PaginationControlsFloat';
import CenterDecorator from '../../storybook/CenterDecorator';
import Toolbar from '../layout/layout/Toolbar';

storiesOf('Navigation / PaginationControlsFloat', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <PaginationControlsFloat currentPage={1} totalPages={42} hasNextPage />
      );
    })
  );
