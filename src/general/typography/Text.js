import styled from 'styled-components';
import { theme } from '../../config';

export const Text = styled.p`
    font-weight: ${props => (props.bold ? 'bold' : 'normal')};
    font-style: ${props => (props.italic ? 'italic' : 'normal')};
    margin: 0 0 20px 0;
    line-height: 1.45;
    color: ${props => theme(props, `${props.tone || 'text'}Color`)};
    font-size: ${props => (props.small ? '80%' : 'inherit')};
`;

export const InlineText = Text.withComponent('span');
