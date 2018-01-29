import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableData,
} from './Table';
import FullDecorator from '../../storybook/FullDecorator';

storiesOf('Data Display / Table', module)
  .addDecorator(FullDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Heading 1</TableHeader>
              <TableHeader>Heading 2</TableHeader>
              <TableHeader>Heading 3</TableHeader>
              <TableHeader alignRight>Actions</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableData>Column 1</TableData>
              <TableData>Column 2</TableData>
              <TableData>Column 3</TableData>
              <TableData alignRight>€10,-</TableData>
            </TableRow>
            <TableRow>
              <TableData>Nonsense</TableData>
              <TableData>Fooo</TableData>
              <TableData>Barr</TableData>
              <TableData alignRight>€20,-</TableData>
            </TableRow>
          </TableBody>
        </Table>
      );
    })
  )
  .add('highlight', () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Heading 1</TableHeader>
            <TableHeader>Heading 2</TableHeader>
            <TableHeader>Heading 3</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableData>Column 1</TableData>
            <TableData>Column 2</TableData>
            <TableData>Column 3</TableData>
          </TableRow>
          <TableRow highlight>
            <TableData>Nonsense</TableData>
            <TableData>Fooo</TableData>
            <TableData>Barr</TableData>
          </TableRow>
        </TableBody>
      </Table>
    );
  });
