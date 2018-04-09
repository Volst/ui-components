import * as React from 'react';
import {
  styled,
  StyledComponentClass,
  ThemeInterface,
} from '../../styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { transparentize } from 'polished';
import History from 'history';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin: 4px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  position: relative;
  transition: 150ms background ease;
  border-radius: 4px;

  &:hover,
  &:focus {
    outline: 0;
    transition-duration: 0;
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

export interface NavItemProps {
  title: string | React.ReactNode;
  to: string;
  onClick?: () => void;
  activePath?: string;
  exact?: boolean;
}

export default class NavItem extends React.Component<NavItemProps, {}> {
  checkActive = (match: any, location: History.Location) => {
    return location.pathname.startsWith(this.props.activePath as string);
  };

  render() {
    const { activePath } = this.props;
    return (
      <StyledNavLink
        to={this.props.to}
        onClick={this.props.onClick}
        className="nav-item"
        activeClassName="active"
        isActive={activePath ? this.checkActive : undefined}
        exact={this.props.exact}
      >
        {this.props.title}
      </StyledNavLink>
    );
  }
}
