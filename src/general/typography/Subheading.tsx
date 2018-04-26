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
  underline?: boolean;
}

const Subheading = styled.h2`
  font-weight: normal;
  font-size: 20px;
  margin: ${props => (props.compact ? '0' : '20px 0 7px 0')};
  color: ${(props: SubheadingProps) =>
    props.color || props.theme!.primaryColor};
  ${(props: SubheadingProps) =>
    (props.underline || '') &&
    `
    border-bottom: 1px solid ${props.theme!.borderColor};
    padding-bottom: 7px;
  `};
`;
Subheading.displayName = 'Subheading';

export default Subheading;
