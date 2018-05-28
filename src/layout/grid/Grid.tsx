import styled, { css, StyledComponent } from 'react-emotion';
import { RefObject, HTMLAttributes, ClassAttributes } from 'react';

import config, { DIMENSION_NAMES } from './config';

export interface GridProps {
  fluid?: boolean;
}

export const Grid = styled<GridProps, 'div'>('div')`
  margin-right: auto;
  margin-left: auto;
  ${p =>
    p.fluid &&
    css`
      padding-right: ${config(p).outerMargin}rem;
      padding-left: ${config(p).outerMargin}rem;
    `};
  ${p =>
    !p.fluid &&
    css`
      ${DIMENSION_NAMES.map(
        t =>
          config(p).container[t] &&
          config(p).media[t]`
        width: ${config(p).container[t]}rem;
      `
      )};
    `};
`;

Grid.displayName = 'Grid';
