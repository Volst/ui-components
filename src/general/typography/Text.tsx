import * as React from 'react';
import {
  styled,
  ThemeProps,
  StyledComponent,
  ThemeInterface,
} from '../../styled-components';
import { Tone } from '../../PropTypes';

export interface TextProps extends ThemeProps {
  tone?: Tone;
  bold?: boolean;
  italic?: boolean;
  small?: boolean;
  compact?: boolean;
}

function getTextColor(props: TextProps): string {
  return props.theme![`${props.tone || 'text'}Color`];
}

export const Text = styled<TextProps, 'p'>('p')`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  margin: 0 0 ${props => (props.compact ? '0' : '20px')} 0;
  line-height: ${props => (props.compact ? '1' : '1.5')};
  color: ${getTextColor};
  font-size: ${props => (props.small ? '75%' : 'inherit')};
`;

Text.displayName = 'Text';

export const InlineText = Text.withComponent('span');
InlineText.displayName = 'InlineText';
