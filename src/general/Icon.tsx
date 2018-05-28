import * as React from 'react';
import { styled, StyledComponent, ThemeInterface } from '../styled-components';

const Icon = styled('svg')`
  display: inline-block;
  fill: currentColor;
  height: ${props => props.height || 18}px;
  width: ${props => props.width || 18}px;
  user-select: none;
`;

Icon.defaultProps = {
  focusable: 'false',
  viewBox: '0 0 24 24',
};

export default Icon;
