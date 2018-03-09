import * as React from 'react';
import {
  styled,
  ThemeProps,
  StyledComponentClass,
  ThemeInterface,
} from '../../styled-components';
import { darken } from 'polished';

export interface MenuRowProps extends ThemeProps {
  inContent?: boolean;
}

export default styled.div`
  height: 35px;
  display: flex;
  align-items: stretch;

  transition: 175ms height ease;

  &:empty {
    height: 10px;
  }

  &:nth-child(even) {
    background: ${props => props.theme.darkColor};
    color: white;

    .nav-item {
      &:hover,
      &:focus {
        background: rgba(255, 255, 255, 0.1);
      }

      &:before {
        border-bottom-color: #fff;
      }
    }
  }

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
