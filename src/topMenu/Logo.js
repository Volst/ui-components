import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin: 0 10px;
    font-size: 32px;
    font-weight: 300;
    text-decoration: none;
    color: inherit;
`;

const Logo = props =>
    <StyledNavLink to="/">
        {props.children}
    </StyledNavLink>;

Logo.propTypes = {
    children: PropTypes.node,
};

export default Logo;
