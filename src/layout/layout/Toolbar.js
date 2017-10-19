import styled from 'styled-components';
import { tint } from 'polished';

export default styled.section`
    height: 40px;
    background-color: ${props => tint(0.15, props.theme.primaryColor)};
    display: flex;
    align-items: center;
`;
