import styled from 'styled-components';
import { theme } from '../../config';

const Subheading = styled.h2`
    font-weight: normal;
    font-size: 20px;
    margin: 20px 0 7px 0;
    color: ${props => props.color || theme(props, 'primaryColor')};
`;

export default Subheading;
