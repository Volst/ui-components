import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../helpers';

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
    border-bottom: 1px solid ${props => theme(props, 'borderColor')};
    ${props =>
        props.highlight &&
        `
        background: ${props => theme(props, 'highlightColor')};
    `};
`;
TableRow.displayName = 'TableRow';
TableRow.propTypes = {
    highlight: PropTypes.bool,
};

export const TableHeader = styled.th`
    padding: 8px 4px;
    text-align: ${props => (props.alignRight ? 'right' : 'left')};
`;
TableHeader.displayName = 'TableHeader';
TableHeader.propTypes = {
    alignRight: PropTypes.bool,
};

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
TableData.propTypes = {
    alignRight: PropTypes.bool,
    stretch: PropTypes.bool,
    noWrap: PropTypes.bool,
};
