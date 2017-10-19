import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

const StyledAside = styled.aside`
    ${props => {
        const width = props.medium ? 450 : 350;
        return `
            width: ${width}px;
            background: ${props.theme.lightColor};

            &.slide-right-enter,
            &.slide-right-leave.slide-right-leave-active {
                margin-right: -${width}px;
            }
            &.slide-left-enter,
            &.slide-left-leave.slide-left-leave-active {
                margin-left: -${width}px;
            }
            &.slide-right-leave,
            &.slide-right-enter.slide-right-enter-active,
            &.slide-left-leave,
            &.slide-left-enter.slide-left-enter-active {
                margin-right: 0;
            }
            &.slide-right-enter-active,
            &.slide-right-leave-active,
            &.slide-left-enter-active,
            &.slide-left-leave-active {
                transition: margin 300ms ease;
            }
        `;
    }};
`;

const Content = styled.div`
    padding: 25px;
`;

const Sidebar = ({ children, medium }) => (
    <StyledAside medium={medium}>
        <Scrollbars>
            <Content>{children}</Content>
        </Scrollbars>
    </StyledAside>
);

Sidebar.propTypes = {
    children: PropTypes.node,
    medium: PropTypes.bool,
};

export default Sidebar;
