import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

Table.displayName = 'Table';

export const TableHead = styled.thead``;
TableHead.displayName = 'TableHead';

export const TableBody = styled.tbody`
    tr:last-child {
        border-bottom: 0;
    }
`;
TableBody.displayName = 'TableBody';
TableBody.displayName = 'TableBody';

export const TableRow = styled.tr`
    border-bottom: 1px solid #ccc;
    ${props =>
        props.highlight &&
        `
        background: #fbdba7;
    `};
`;
TableRow.displayName = 'TableRow';

export const TableHeader = styled.th`
    padding: 8px 4px;
    text-align: ${props => (props.alignRight ? 'right' : 'left')};
`;
TableHeader.displayName = 'TableHeader';
TableHeader.displayName = 'TableHeader';

export const TableData = styled.td`
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
