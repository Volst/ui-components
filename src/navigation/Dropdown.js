import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { tint } from 'polished';
import { theme, readableColor } from '../config';
import onClickOutside from 'react-onclickoutside';

const RelativeWrapper = styled.div`position: relative;`;

class MyDropdown extends Component {
    static propTypes = {
        overlay: PropTypes.element.isRequired,
        children: PropTypes.node.isRequired,
    };

    state = {
        opened: false,
    };

    showOverlay = () => {
        this.setState({ opened: true });
    };

    hideOverlay = () => {
        this.setState({ opened: false });
    };

    handleClickOutside = () => {
        this.hideOverlay();
    };

    render() {
        return (
            <RelativeWrapper onClick={this.showOverlay}>
                {this.props.children}
                {this.state.opened && this.props.overlay}
            </RelativeWrapper>
        );
    }
}

export const Dropdown = onClickOutside(MyDropdown);

export const DropdownMenu = styled.div`
    position: absolute;
    z-index: 10;
    background: ${props => theme(props, 'componentBackground')};
    border-radius: 5px;
    display: flex;
    border: 1px solid ${props => theme(props, 'primaryColor')};
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    flex-direction: column;
    overflow: hidden;
`;

export const DropdownItem = styled.div`
    padding: 10px 15px;
    border-bottom: 1px solid ${props => theme(props, 'primaryColor')};
    color: ${props => theme(props, 'textColor')};
    cursor: pointer;
    user-select: none;
    &:hover {
        ${props => {
            const background = tint(0.2, theme(props, 'primaryColor'));
            return `
                background: ${background};
                color: ${readableColor(background)};
            `;
        }};
    }
    &:last-child {
        border-bottom-width: 0;
    }
`;
