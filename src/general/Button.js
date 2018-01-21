import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { omit } from 'lodash';
import { Link as RouterLink } from 'react-router-dom';
import { darken, tint, rgba, transparentize } from 'polished';
import { readableColor } from '../config';
import { TonePropType } from '../PropTypes';
import { showLoaderCss } from '../feedback/Loader';

// I really really do not like this hack, but we can't pass made-up properties
// to DOM elements without React giving a warning.
const OMIT_PROPS = [
  'icon',
  'link',
  'fullWidth',
  'tone',
  'children',
  'small',
  'loading',
];

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
    const color = props.tone ? background : props.theme.textColor;
    return props.disabled ? tint(0.25, color) : color;
  }
  return readableColor(background);
}

// `type="submit"` is a nasty default and we forget all the time to set this to type="button" manually...
export const Button = styled(props => (
  <button type="button" {...getProps(props)} />
)).attrs({
  disabled: props => props.disabled || props.loading,
})`
  display: ${props => (props.link ? 'inline' : 'inline-flex')};
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  line-height: 1;
  user-select: none;
  font-size: 14px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  text-decoration: none;
  position: relative;
  border-radius: 4px;
  transition: 250ms background ease;

  &:hover {
    transition: 100ms background ease;
  }

  > svg {
    ${props =>
      props.icon
        ? `
        margin: 5px;
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
    const background = props.theme[`${props.tone || 'buttonPrimary'}Color`];
    const textColor = getTextColor(props, background);

    if (props.link) {
      return `color: ${textColor};`;
    }

    if (props.icon) {
      return `
        margin: 1px;
        color: ${textColor};

        ${props.disabled ||
          `
            &:hover, &:focus {
              outline: 0;
              background: ${transparentize(0.9, props.theme.darkColor)};
            }
          `}
      `;
    }

    return `
      color: ${textColor};
      height: ${props.small ? '24px' : '30px'};
      padding: ${props.small ? '0 5px' : '0 10px'};
      margin: 5px 5px 5px 0;
      vertical-align: middle;

      ${
        props.disabled
          ? `
          background: ${tint(props.tone === 'light' ? 0.5 : 0.25, background)};
          color: ${tint(0.4, textColor)};
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
            box-shadow: 0 0 3px 3px ${rgba(background, 0.4)};
          }
      `
      };
      ${props.loading &&
        `
      &:after {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        margin: -9px 0 0 -9px;
        ${showLoaderCss};
      }
      `};
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
  small: PropTypes.bool,
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
