import React from 'react';
import styled from 'styled-components';
import { omit } from 'lodash';
import { Link as RouterLink } from 'react-router-dom';

// I really really do not like this hack, but we can't pass made-up properties
// to DOM elements without React giving a warning.
const OMIT_PROPS = ['unstyled', 'fullWidth'];

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
        props.icon &&
        `
        color: ${props.unstyled ? '#000' : '#fff'};
    `}

    ${props =>
        props.disabled
            ? `
        cursor: not-allowed;
    `
            : ''}

    ${props =>
        !props.unstyled &&
        `
        background: ${props.theme.primary};
        height: 30px;
        color: #fff;
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
            background-color: #cecece;
            color: #e6e6e6;
        `
            : ''}
    `};
`;
Button.displayName = 'Button';

export const ExternalLink = Button.withComponent(props =>
    <a {...omit(props, OMIT_PROPS)} />
);
ExternalLink.displayName = 'ExternalLink';
export const Link = Button.withComponent(props =>
    <RouterLink {...omit(props, OMIT_PROPS)} />
);
Link.displayName = 'Link';
