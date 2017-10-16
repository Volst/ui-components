import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { omit } from 'lodash';
import { Link as RouterLink } from 'react-router-dom';
import { darken, tint, rgba } from 'polished';
import { theme, readableColor } from '../config';
import { TonePropType } from '../PropTypes';

// I really really do not like this hack, but we can't pass made-up properties
// to DOM elements without React giving a warning.
const OMIT_PROPS = ['icon', 'link', 'fullWidth', 'tone', 'children'];

function insertSpanForTextNodes(child) {
    if (typeof child === 'string') {
        return <span>{child}</span>;
    }
    return child;
}

function getProps(props) {
    const newProps = omit(props, OMIT_PROPS);
    newProps.children = Children.map(props.children, insertSpanForTextNodes);
    return newProps;
}

function getTextColor(props, background) {
    if (props.link) {
        return background;
    }
    if (props.icon) {
        return props.tone ? background : theme(props, 'textColor');
    }
    return readableColor(background);
}

// `type="submit"` is a nasty default and we forget all the time to set this to type="button" manually...
export const Button = styled(props => (
    <button type="button" {...getProps(props)} />
))`
    display: ${props => (props.link ? 'inline' : 'inline-flex')};
    align-items: center;
    justify-content: center;
    margin: 1px;
    padding: 0;
    border: 0;
    background: transparent;
    line-height: 1;
    user-select: none;
    font-size: ${props => (props.link ? '' : '16px')};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

    > svg {
        ${props =>
            props.icon
                ? `
        margin: 6px;
        `
                : `
        &:first-child {
            margin-right: 6px;
        }
        &:last-child {
            margin-left: 6px;
        }
        &:first-child:last-child {
            margin: 0;
        }
        `};
    }

    ${props =>
        props.fullWidth &&
        `
        margin: 5px 0;
        width: 100%;
    `};
    ${props => {
        const background = theme(props, `${props.tone || 'primary'}Color`);
        const textColor = `color: ${getTextColor(props, background)};`;

        if (props.icon) {
            return textColor;
        }

        if (props.link) {
            return `
                ${textColor}
                text-decoration: underline;
            `;
        }

        return `
            ${textColor}
            height: 30px;
            padding: 0 10px;
            margin: 5px;
            text-decoration: none;
            border-radius: 4px;
            vertical-align: middle;

            ${props.disabled
                ? `
                ${props.tone === 'light'
                    ? `
                    background: ${tint(0.5, background)};
                    color: ${tint(0.4, theme(props, 'textColor'))};
                `
                    : `
                    background: ${tint(0.25, background)};
                `}
            `
                : `
                background: ${background};

            &:hover {
                background: ${darken(0.03, background)};
            }

            &:active {
                background: ${darken(0.07, background)};
            }

            &:focus {
                box-shadow 0 0 0 3px ${rgba(background, 0.5)};
            }
        `}
    `;
    }};
`;
Button.displayName = 'Button';
Button.propTypes = {
    onClick: PropTypes.func,
    link: PropTypes.bool,
    icon: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    tone: TonePropType,
};

export const ExternalLink = Button.withComponent(props => {
    if (props.disabled) {
        return <button {...getProps(props)} />;
    }
    return <a {...getProps(props)} />;
});
ExternalLink.displayName = 'ExternalLink';

export const Link = Button.withComponent(props => {
    if (props.disabled) {
        return <button {...getProps(props)} />;
    }
    return <RouterLink {...getProps(props)} />;
});
Link.displayName = 'Link';
