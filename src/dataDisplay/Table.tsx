import { styled, styledTs } from '../styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

Table.displayName = 'Table';

export const TableHead = styled.thead``;
TableHead.displayName = 'TableHead';

export const TableBody = styled.tbody`
  &:last-child tr:last-child {
    border-bottom: 0;
  }
`;
TableBody.displayName = 'TableBody';
TableBody.displayName = 'TableBody';

interface TableRowProps {
  highlight?: boolean;
}
export const TableRow = styledTs<TableRowProps>(styled.tr)`
  border-bottom: 1px solid ${props => props.theme.borderColor};
  ${props =>
    props.highlight &&
    `
        background: ${props.theme.highlightColor};
    `};
`;
TableRow.displayName = 'TableRow';

interface TableHeaderProps {
  alignRight?: boolean;
}
export const TableHeader = styledTs<TableHeaderProps>(styled.th)`
  padding: 8px 4px;
  text-align: ${props => (props.alignRight ? 'right' : 'left')};
`;
TableHeader.displayName = 'TableHeader';

interface TableDataProps {
  alignRight?: boolean;
  stretch?: boolean;
  noWrap?: boolean;
}
export const TableData = styledTs<TableDataProps>(styled.td)`
  padding: 8px 4px;
  font-size: 14px;

  ${props =>
    props.stretch
      ? `
        width: 100%;
    `
      : null} ${props =>
  props.alignRight
    ? `
        text-align: right;
    `
    : null} ${props =>
  props.noWrap
    ? `
        white-space: nowrap;
    `
    : null};
`;
TableData.displayName = 'TableData';
