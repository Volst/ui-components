import * as React from 'react';
import {
  styled,
  ThemeProps,
  StyledComponentClass,
  ThemeInterface,
} from '../../styled-components';
import { darken, rgba } from 'polished';
import { Tone } from '../..';
import { readableColor } from '../../config';

export interface MenuRowProps extends ThemeProps {
  inContent?: boolean;
  tone?: Tone;
  arrowTone?: Tone;
}

export default styled.div`
  height: 35px;
  display: flex;
  align-items: stretch;

  transition: 175ms height ease;

  &:empty {
    height: 10px;
  }

  ${(props: MenuRowProps) => {
    const bgColor = props.tone
      ? props.theme![`${props.tone}Color`]
      : props.theme!.componentBackground;
    const textColor = readableColor(bgColor);
    const arrowColor = props.arrowTone
      ? props.theme![`${props.arrowTone}Color`]
      : props.theme!.componentBackground;
    return `
      background: ${bgColor};
      color: ${textColor};

      .nav-item {
        &:hover,
        &:focus {
          background: ${rgba(textColor, 0.1)};
        }

        &:before {
          border-bottom-color: ${arrowColor};
        }
      }
    `;
  }};

  ${(props: MenuRowProps) =>
    (props.inContent || '') &&
    `
      margin: -20px -20px 0 -20px;
      border-bottom: 1px solid ${props.theme!.borderColor};
      .nav-item:after {
        content: '';
      }
      .nav-item:before {
        border-bottom-color: ${darken(0.1, props.theme!.borderColor)};
      }
    `};
`;
