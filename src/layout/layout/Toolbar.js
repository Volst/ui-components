import styled from 'styled-components';
import { tint } from 'polished';
import { theme } from '../../config';

export default styled.section`
    height: 40px;
    background-color: ${props => tint(0.15, theme(props, 'primary'))};
    display: flex;
    align-items: center;
`;
