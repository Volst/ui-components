import styled from 'styled-components';
import { theme } from '../../config';

export default styled.div`
    height: 50px;
    display: flex;
    align-items: stretch;

    &:nth-child(even) {
        background: ${props => theme(props, 'primaryColor')};
        color: white;

        .nav-item:before {
            border-bottom-color: #fff;
        }
    }

    ${props =>
        props.inContent &&
        `
        margin: -20px -20px 0 -20px;
        border-bottom: 1px solid ${theme(props, 'primaryColor')};
        .nav-item:after {
            content: '';
        }
        .nav-item:before {
            border-bottom-color: ${theme(props, 'primaryColor')};
        }
    `};
`;
