import * as React from 'react';
import {
  styled,
  StyledComponent,
  ThemeInterface,
} from '../../styled-components';

export interface SuperTextProps {
  color?: string;
  compact?: boolean;
}

const SuperText = styled<SuperTextProps, 'h3'>('h3')`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  margin: ${props => (props.compact ? '0' : '20px 0 7px 0')};
  color: ${props => props.color || ''};
`;
SuperText.displayName = 'SuperText';

export default SuperText;
