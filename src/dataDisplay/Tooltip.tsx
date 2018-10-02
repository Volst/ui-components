import * as React from 'react';
import styled, {
  injectGlobal,
  withTheme,
  keyframes,
} from '../styled-components';
import { readableColor, ThemeInterface } from '../config';
import RTooltip from 'rc-tooltip';

export interface TooltipProps {
  message: string;
  direction:
    | 'left'
    | 'right'
    | 'top'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight';
  theme?: ThemeInterface;
  mouseLeaveDelay?: number;
}
const globalStyles = (theme: ThemeInterface) => injectGlobal`
  .rc-tooltip {
    position: absolute;
    z-index: ${theme.zIndexTooltip};
    display: block;
    visibility: visible;
    font-size: 12px;
    line-height: 1.5;
    opacity: 0.9;
    max-width: 300px;
  }
  .rc-tooltip-hidden {
    display: none;
  }
  .rc-tooltip-placement-top,
  .rc-tooltip-placement-topLeft,
  .rc-tooltip-placement-topRight {
    padding: 5px 0 9px 0;
  }
  .rc-tooltip-placement-right,
  .rc-tooltip-placement-rightTop,
  .rc-tooltip-placement-rightBottom {
    padding: 0 5px 0 9px;
  }
  .rc-tooltip-placement-bottom,
  .rc-tooltip-placement-bottomLeft,
  .rc-tooltip-placement-bottomRight {
    padding: 9px 0 5px 0;
  }
  .rc-tooltip-placement-left,
  .rc-tooltip-placement-leftTop,
  .rc-tooltip-placement-leftBottom {
    padding: 0 9px 0 5px;
  }
  .rc-tooltip-inner {
    padding: 2px 6px;
    color: #fff;
    text-align: left;
    text-decoration: none;
    background-color: #373737;
    border-radius: 2px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
  }
  .rc-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }
  .rc-tooltip-placement-top .rc-tooltip-arrow,
  .rc-tooltip-placement-topLeft .rc-tooltip-arrow,
  .rc-tooltip-placement-topRight .rc-tooltip-arrow {
    bottom: 4px;
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-top-color: #373737;
  }
  .rc-tooltip-placement-top .rc-tooltip-arrow {
    left: 50%;
  }
  .rc-tooltip-placement-topLeft .rc-tooltip-arrow {
    left: 15%;
  }
  .rc-tooltip-placement-topRight .rc-tooltip-arrow {
    right: 15%;
  }
  .rc-tooltip-placement-right .rc-tooltip-arrow,
  .rc-tooltip-placement-rightTop .rc-tooltip-arrow,
  .rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
    left: 4px;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: #373737;
  }
  .rc-tooltip-placement-right .rc-tooltip-arrow {
    top: 50%;
  }
  .rc-tooltip-placement-rightTop .rc-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }
  .rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
    bottom: 15%;
  }
  .rc-tooltip-placement-left .rc-tooltip-arrow,
  .rc-tooltip-placement-leftTop .rc-tooltip-arrow,
  .rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
    right: 4px;
    margin-top: -5px;
    border-width: 5px 0 5px 5px;
    border-left-color: #373737;
  }
  .rc-tooltip-placement-left .rc-tooltip-arrow {
    top: 50%;
  }
  .rc-tooltip-placement-leftTop .rc-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }
  .rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
    bottom: 15%;
  }
  .rc-tooltip-placement-bottom .rc-tooltip-arrow,
  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow,
  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
    top: 4px;
    margin-left: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #373737;
  }
  .rc-tooltip-placement-bottom .rc-tooltip-arrow {
    left: 50%;
  }
  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow {
    left: 15%;
  }
  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
    right: 15%;
  }
`;

let globalInserted = false;

class Tooltip extends React.Component<TooltipProps, {}> {
  componentDidMount() {
    // Terrible hack, but I did not yet find a prop way to defer loading
    // the global styles for rc-dialog.
    if (!globalInserted) {
      globalStyles(this.props.theme!);
      globalInserted = true;
    }
  }

  render() {
    const { direction, children } = this.props;
    return (
      <RTooltip
        placement={this.props.direction || 'bottom'}
        overlay={<span>{this.props.message}</span>}
        mouseLeaveDelay={this.props.mouseLeaveDelay || 0}
      >
        {children}
      </RTooltip>
    );
  }
}

export default withTheme(Tooltip);
