import styled from 'styled-components';
import { theme } from '../../config';

const Heading = styled.h1`
    font-weight: bold;
    font-size: 26px;
    margin: 0;
    padding: 20px 0;
    color: ${props => props.color || theme(props, 'textColor')};
`;

export default Heading;
