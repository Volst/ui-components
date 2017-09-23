import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from '../../config';

const Item = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin: 0 10px;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    position: relative;

    &.active {
        &:before,
        &:after {
            border-width: 8px;
        }
    }

    &:after {
        position: absolute;
        left: 50%;
        bottom: -1px;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border: 0 solid transparent;
        border-bottom-color: #fff;
        border-top: 0;
        transition: 175ms all ease;
    }

    &:before {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        content: '';
        width: 0;
        height: 0;
        border: 0 solid transparent;
        border-bottom-color: ${props => theme(props, 'primary')};
        border-top: 0;
        transition: 175ms all ease;
    }
`;

export default class NavItem extends Component {
    static propTypes = {
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
            .isRequired,
        to: PropTypes.string,
        onClick: PropTypes.func,
        activePath: PropTypes.string,
    };

    checkActive = (match, location) => {
        return location.pathname.startsWith(this.props.activePath);
    };

    render() {
        const { activePath } = this.props;
        return (
            <Item
                to={this.props.to}
                onClick={this.props.onClick}
                className="nav-item"
                activeClassName="active"
                isActive={activePath ? this.checkActive : null}
            >
                {this.props.title}
            </Item>
        );
    }
}
