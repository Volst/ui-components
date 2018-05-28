import * as React from 'react';
import {
  styled,
  ThemeProps,
  StyledComponent,
  ThemeInterface,
} from '../../styled-components';

export interface HeadingProps extends ThemeProps {
  color?: string;
  compact?: boolean;
}
const Heading = styled<HeadingProps, 'h1'>('h1')`
  font-weight: bold;
  font-size: 26px;
  margin: ${props => (props.compact ? '0' : '20px 0')};
  color: ${props => props.color || props.theme.headingTextColor || ''};
`;
Heading.displayName = 'Heading';

export default Heading;
