import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme, readableColor } from '../config';

const StyledTooltip = styled.div`
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
        z-index: ${props => theme(props, 'zIndexTooltip')};
    }

    &:before {
        content: '';
        width: 0;
        height: 0;
        border-left: solid 5px transparent;
        border-right: solid 5px transparent;
        border-bottom: solid 5px ${props => theme(props, 'darkColor')};
        margin-top: -5px;
    }

    &:after {
        content: attr(aria-label);
        padding: 2px 10px;
        background: ${props => theme(props, 'darkColor')};
        color: ${props => readableColor(theme(props, 'darkColor'))};
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
        border-top: solid 5px ${props => theme(props, 'darkColor')};
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

export default class Tooltip extends Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
        direction: PropTypes.oneOf(['s', 'n', 'se', 'sw']).isRequired,
    };

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
