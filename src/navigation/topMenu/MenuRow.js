import styled from 'styled-components';

export default styled.div`
    height: 50px;
    display: flex;
    align-items: stretch;

    &:nth-child(even) {
        background: ${props => props.theme.primaryColor};
        color: white;

        .nav-item:before {
            border-bottom-color: #fff;
        }
    }

    ${props =>
        props.inContent &&
        `
        margin: -20px -20px 0 -20px;
        border-bottom: 1px solid ${props.theme.primaryColor};
        .nav-item:after {
            content: '';
        }
        .nav-item:before {
            border-bottom-color: ${props.theme.primaryColor};
        }
    `};
`;
