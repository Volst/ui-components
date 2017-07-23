import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

const StyledAside = styled.aside`
    width: ${props => (props.medium ? 450 : 350)}px;
    background: #eee;
`;

const Content = styled.div`padding: 25px;`;

const Sidebar = ({ children, medium }) =>
    <StyledAside medium={medium}>
        <Scrollbars>
            <Content>
                {children}
            </Content>
        </Scrollbars>
    </StyledAside>;

Sidebar.propTypes = {
    children: PropTypes.node,
    medium: PropTypes.bool,
};

export default Sidebar;
