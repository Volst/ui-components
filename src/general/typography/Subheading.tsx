import * as React from 'react';
import {
  styled,
  ThemeProps,
  StyledComponentClass,
  ThemeInterface,
} from '../../styled-components';

export interface SubheadingProps extends ThemeProps {
  color?: string;
  compact?: boolean;
}

const Subheading = styled.h2`
  font-weight: normal;
  font-size: 20px;
  margin: ${props => (props.compact ? '0' : '20px 0 7px 0')};
  color: ${(props: SubheadingProps) => props.color || props.theme.primaryColor};
`;
Subheading.displayName = 'Subheading';

export default Subheading;
