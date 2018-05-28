import * as React from 'react';
import {
  styled,
  ThemeProps,
  StyledComponent,
  ThemeInterface,
} from '../../styled-components';

export interface SubheadingProps extends ThemeProps {
  color?: string;
  compact?: boolean;
  underline?: boolean;
}

const Subheading = styled<SubheadingProps, 'h2'>('h2')`
  font-weight: normal;
  font-size: 20px;
  margin: ${props => (props.compact ? '0' : '20px 0 7px 0')};
  color: ${props => props.color || props.theme!.primaryColor};
  ${props =>
    (props.underline || '') &&
    `
    border-bottom: 1px solid ${props.theme!.borderColor};
    padding-bottom: 7px;
  `};
`;
Subheading.displayName = 'Subheading';

export default Subheading;
