import React from 'react';
import { StyledNavLink } from './NavItem';

export default StyledNavLink.withComponent(({ title, ...props }) => (
  <a {...props}>{title}</a>
));
