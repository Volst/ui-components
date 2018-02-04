import * as React from 'react';
import { StyledNavLink } from './NavItem';

export default (StyledNavLink as any).withComponent(({ title, ...props }) => (
  <a {...props}>{title}</a>
));
