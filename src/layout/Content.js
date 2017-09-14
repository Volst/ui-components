import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

const StyledScrollbars = styled(Scrollbars)`
    flex: 1;
`;

const Main = styled.main`
    margin: 0 auto;
    max-width: 1500px;
    padding: 25px;
    ${props =>
        props.blur
            ? `
        filter: blur(2px) grayscale(40%);
        pointer-events: none;
        opacity: 0.6;
    `
            : null} transition: 200ms filter ease;

    ${props =>
        props.center
            ? `
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `
            : null};
`;

const Content = props =>
    <StyledScrollbars>
        <Main center={props.center} blur={props.blur}>
            {props.children}
        </Main>
    </StyledScrollbars>;

Content.propTypes = {
    children: PropTypes.node,
    center: PropTypes.bool,
    blur: PropTypes.bool,
};

export default Content;
