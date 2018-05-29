import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import PaginationControls from './PaginationControls';
import CenterDecorator from '../../storybook/CenterDecorator';
import Toolbar from '../layout/layout/Toolbar';

storiesOf('Navigation / PaginationControls', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return <PaginationControls currentPage={1} totalPages={42} hasNextPage />;
    })
  )
  .add(
    'minimal',
    withInfo()(() => {
      return (
        <PaginationControls
          previousText=""
          nextText=""
          ofText="/"
          currentPage={1}
          totalPages={42}
          hasNextPage
        />
      );
    })
  )
  .add(
    'in toolbar',
    withInfo()(() => {
      return (
        <Toolbar>
          <PaginationControls currentPage={1} totalPages={42} hasNextPage />
        </Toolbar>
      );
    })
  );
