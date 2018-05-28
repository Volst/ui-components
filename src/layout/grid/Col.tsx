/* tslint:disable no-bitwise */
import styled, { StyledComponent } from 'react-emotion';
import { RefObject, HTMLAttributes, ClassAttributes } from 'react';
import { isInteger } from 'lodash';

import config, { DIMENSION_NAMES } from './config';

export type ModificatorType = number | boolean;
const offsetProps = DIMENSION_NAMES.map(d => `${d}Offset`);

export interface ColProps {
  xs?: ModificatorType;
  xsOffset?: number;
  sm?: ModificatorType;
  smOffset?: number;
  md?: ModificatorType;
  mdOffset?: number;
  lg?: ModificatorType;
  lgOffset?: number;
  reverse?: boolean;
}

export const Col = styled<ColProps, 'div'>('div')`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${p => config(p).gutterWidth / 2}rem;
  padding-left: ${p => config(p).gutterWidth / 2}rem;
  ${p =>
    p.reverse &&
    `
    flex-direction: column-reverse;
  `}
  ${p =>
    Object.keys(p)
      .filter(k => ~DIMENSION_NAMES.indexOf(k))
      .sort(
        (k1, k2) => DIMENSION_NAMES.indexOf(k1) - DIMENSION_NAMES.indexOf(k2)
      )
      .map(
        k =>
          config(p).media[k]`${
            isInteger(p[k])
              ? // Integer value
                `
        flex-basis: ${100 / config(p).gridSize * p[k]}%;
        max-width: ${100 / config(p).gridSize * p[k]}%;
        display: block;
      `
              : // Boolean
                p[k]
                ? // Auto-width
                  `
          flex-grow: 1;
          flex-basis: 0;
          max-width: 100%;
          display: block;
        `
                : // Hide element
                  'display: none;'
          }`
      )}
  ${p =>
    Object.keys(p)
      .filter(k => ~offsetProps.indexOf(k))
      .map(
        k =>
          config(p).media[k.replace(/Offset$/, '')]`
        margin-left: ${100 / config(p).gridSize * p[k]}%;
      `
      )}
`;

Col.displayName = 'Col';
