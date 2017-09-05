import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { omit } from 'lodash';
import { Link as RouterLink } from 'react-router-dom';
import { darken, tint } from 'polished';
import { COLOR_TEXT } from './ReCyCleTheme';

// I really really do not like this hack, but we can't pass made-up properties
// to DOM elements without React giving a warning.
const OMIT_PROPS = ['unstyled', 'fullWidth', 'tone'];

// `type="submit"` is a nasty default and we forget all the time to set this to type="button" manually...
export const Button = styled(props =>
    <button type="button" {...omit(props, OMIT_PROPS)} />
)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    line-height: 1;

    > svg {
        margin: ${props => (props.unstyled ? '6px' : '0 6px 0 0')};
    }

    ${props =>
        props.icon
            ? `
        color: ${props.unstyled ? '#000' : '#fff'};
    `
            : ''}

    ${props =>
        props.disabled
            ? `
        cursor: not-allowed;
    `
            : ''}

    ${props => {
        const color = props.theme[props.tone || 'primary'];
        return !props.unstyled
            ? `
        color: ${props.tone === 'light' ? COLOR_TEXT : '#fff'};
        height: 30px;
        padding: 0 10px;
        margin: 5px;
        text-decoration: none;
        border-radius: 4px;
        font-size: 16px;
        vertical-align: middle;

        ${props.fullWidth
            ? `
            margin: 5px 0;
            width: 100%;
        `
            : ''}

        ${props.disabled
            ? `
            ${props.tone === 'light'
                ? `
                background: ${tint(0.5, color)};
                color: ${tint(0.4, COLOR_TEXT)};
            `
                : `
                background: ${tint(0.25, color)};
            `}
        `
            : `
            background: ${color};

            &:hover {
                background: ${darken(0.03, color)};
            }

            &:active {
                background: ${darken(0.07, color)};
            }
        `}
    `
            : '';
    }};
`;
Button.displayName = 'Button';
Button.propTypes = {
    onClick: PropTypes.func,
    unstyled: PropTypes.bool,
    icon: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    tone: PropTypes.oneOf(['success', 'warning', 'dark', 'light']),
};

export const ExternalLink = Button.withComponent(props => {
    if (props.disabled) {
        return <button {...omit(props, OMIT_PROPS)} />;
    }
    return <a {...omit(props, OMIT_PROPS)} />;
});
ExternalLink.displayName = 'ExternalLink';

export const Link = Button.withComponent(props => {
    if (props.disabled) {
        return <button {...omit(props, OMIT_PROPS)} />;
    }
    return <RouterLink {...omit(props, OMIT_PROPS)} />;
});
Link.displayName = 'Link';
