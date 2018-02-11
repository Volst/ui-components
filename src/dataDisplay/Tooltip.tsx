import * as React from 'react';
import styled from '../styled-components';
import { readableColor } from '../config';

const StyledTooltip = styled.span`
  position: relative;
  max-width: fit-content;

  &:before,
  &:after {
    position: absolute;
    top: 122%;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    pointer-events: none;
    z-index: ${props => props.theme.zIndexTooltip};
  }

  &:before {
    content: '';
    width: 0;
    height: 0;
    border-left: solid 5px transparent;
    border-right: solid 5px transparent;
    border-bottom: solid 5px ${props => props.theme.darkColor};
    margin-top: -5px;
  }

  &:after {
    content: attr(aria-label);
    padding: 2px 10px;
    background: ${props => props.theme.darkColor};
    color: ${props => readableColor(props.theme.darkColor)};
    font-size: 12px;
    line-height: 1.7;
    white-space: nowrap;
    border-radius: 2px;
  }

  &.tooltipped-n:before {
    top: auto;
    bottom: 122%;
    margin: 0 0 -5px;
    border-left: solid 5px transparent;
    border-right: solid 5px transparent;
    border-top: solid 5px ${props => props.theme.darkColor};
    border-bottom: 0;
  }

  &.tooltipped-n:after {
    top: auto;
    bottom: 122%;
  }

  &.tooltipped-sw:after {
    left: auto;
    transform: none;
    right: 50%;
    margin-right: -12px;
  }

  &.tooltipped-se:after {
    transform: none;
    margin-left: -12px;
  }

  &:hover {
    &:before,
    &:after {
      display: block;
    }
  }
`;

export interface TooltipProps {
  message: string;
  direction: 's' | 'n' | 'se' | 'sw';
}

export default class Tooltip extends React.Component<TooltipProps, {}> {
  static defaultProps = {
    direction: 's',
  };

  render() {
    const { direction, children } = this.props;
    return (
      <StyledTooltip
        aria-label={this.props.message}
        className={`tooltipped-${direction}`}
      >
        {children}
      </StyledTooltip>
    );
  }
}
