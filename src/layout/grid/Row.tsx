import styled, { StyledComponent } from 'react-emotion';
import { RefObject, HTMLAttributes, ClassAttributes } from 'react';

import config, { IDIMENSION_NAMES } from './config';

export interface RowProps {
  reverse?: boolean;
  start?: IDIMENSION_NAMES;
  center?: IDIMENSION_NAMES;
  end?: IDIMENSION_NAMES;
  top?: IDIMENSION_NAMES;
  middle?: IDIMENSION_NAMES;
  bottom?: IDIMENSION_NAMES;
  around?: IDIMENSION_NAMES;
  between?: IDIMENSION_NAMES;
  first?: IDIMENSION_NAMES;
  last?: IDIMENSION_NAMES;
}

export const Row = styled<RowProps, 'div'>('div')`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: ${p => config(p).gutterWidth / 2 * -1}rem;
  margin-left: ${p => config(p).gutterWidth / 2 * -1}rem;
  ${p =>
    p.reverse &&
    `
    flex-direction: row-reverse;
  `}
  ${p =>
    p.start &&
    config(p).media[p.start]`
    justify-content: flex-start;
    text-align: start;
  `}
  ${p =>
    p.center &&
    config(p).media[p.center]`
    justify-content: center;
    text-align: center;
  `}
  ${p =>
    p.end &&
    config(p).media[p.end]`
    justify-content: flex-end;
    text-align: end;
  `}
  ${p =>
    p.top &&
    config(p).media[p.top]`
    align-items: flex-start;
  `}
  ${p =>
    p.middle &&
    config(p).media[p.middle]`
    align-items: center;
  `}
  ${p =>
    p.bottom &&
    config(p).media[p.bottom]`
    align-items: flex-end;
  `}
  ${p =>
    p.around &&
    config(p).media[p.around]`
    justify-content: space-around;
  `}
  ${p =>
    p.between &&
    config(p).media[p.between]`
    justify-content: space-between;
  `}
  ${p =>
    p.first &&
    config(p).media[p.first]`
    order: -1;
  `}
  ${p =>
    p.last &&
    config(p).media[p.last]`
    order: 1;
  `}
`;

Row.displayName = 'Row';
