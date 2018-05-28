import * as React from 'react';
import {
  styled,
  ThemeProps,
  StyledComponent,
  ThemeInterface,
} from '../styled-components';

export const Table = styled('table')`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  table-layout: fixed;
`;

Table.displayName = 'Table';

export const TableHead = styled('thead')``;
TableHead.displayName = 'TableHead';

export const TableBody = styled('tbody')`
  &:last-child tr:last-child {
    border-bottom: 0;
  }
`;
TableBody.displayName = 'TableBody';

export interface TableRowProps extends ThemeProps {
  highlight?: boolean;
}
export const TableRow = styled<TableRowProps, 'tr'>('tr')`
  border-bottom: 1px solid ${props => props.theme.borderColor};
  word-wrap: break-word;
  ${props =>
    (props.highlight || '') &&
    `
        background: ${props.theme!.highlightColor};
    `};
`;
TableRow.displayName = 'TableRow';

export interface TableHeaderProps {
  alignRight?: boolean;
}
export const TableHeader = styled<TableHeaderProps, 'th'>('th')`
  padding: 8px 4px;
  text-align: ${props => (props.alignRight ? 'right' : 'left')};
`;
TableHeader.displayName = 'TableHeader';

export interface TableDataProps extends ThemeProps {
  alignRight?: boolean;
  stretch?: boolean;
  noWrap?: boolean;
}
export const TableData = styled<TableDataProps, 'td'>('td')`
  padding: 8px 4px;
  font-size: 14px;

  ${props =>
    (props.stretch || '') &&
    `
      width: 100%;
    `};
  ${props =>
    (props.alignRight || '') &&
    `
      text-align: right;
    `};
  ${props =>
    (props.noWrap || '') &&
    `
      white-space: nowrap;
    `};
`;
TableData.displayName = 'TableData';
