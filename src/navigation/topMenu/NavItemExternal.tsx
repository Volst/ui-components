import * as React from 'react';
import { StyledNavLink } from './NavItem';

export interface NavItemExternalProps {
  title: string;
}

export default (StyledNavLink as any).withComponent(
  ({ title, ...props }: NavItemExternalProps) => <a {...props}>{title}</a>
);
