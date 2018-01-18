import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { transparentize } from 'polished';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin: 4px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  position: relative;
  transition: 250ms background ease;
  border-radius: 4px;

  &:hover,
  &:focus {
    outline: 0;
    transition: 100ms background ease;
    background: ${props => transparentize(0.9, props.theme.darkColor)};
  }

  &.active {
    &:before,
    &:after {
      border-width: 5px;
    }
  }

  &:after {
    position: absolute;
    left: 50%;
    bottom: -5px;
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
    bottom: -4px;
    transform: translateX(-50%);
    content: '';
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-bottom-color: ${props => props.theme.darkColor};
    border-top: 0;
    transition: 175ms all ease;
  }
`;

export default class NavItem extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
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
      <StyledNavLink
        to={this.props.to}
        onClick={this.props.onClick}
        className="nav-item"
        activeClassName="active"
        isActive={activePath ? this.checkActive : null}
      >
        {this.props.title}
      </StyledNavLink>
    );
  }
}
