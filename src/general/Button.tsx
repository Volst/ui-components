import * as React from 'react';
import {
  styled,
  css,
  StyledComponent,
  ThemeInterface,
  ThemeProps,
} from '../styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { darken, tint, rgba } from 'polished';
import { readableColor } from '../config';
import { Tone } from '../PropTypes';
import { showLoaderCss } from '../feedback/Loader';
import { LocationDescriptor } from 'history';

function insertSpanForTextNodes(child: React.ReactChild) {
  if (typeof child === 'string') {
    return <span>{child}</span>;
  }
  return child;
}

function getProps(props: any) {
  const { ...newProps } = props;
  newProps.children = React.Children.map(
    props.children,
    insertSpanForTextNodes
  );
  return newProps;
}

function getTextColor(
  props: ButtonProps & ThemeProps,
  backgroundColor: string
) {
  if (props.link) {
    return backgroundColor;
  }
  if (props.ghost) {
    const color = props.tone ? backgroundColor : props.theme!.textColor;
    return props.disabled ? tint(0.3, color) : color;
  }
  return readableColor(backgroundColor);
}

export interface ButtonProps {
  onClick?: (e: MouseEvent) => void;
  link?: boolean;
  ghost?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  tone?: Tone;
  small?: boolean;
  loading?: boolean;
  tabIndex?: number;
}

const StyledButton = styled<ButtonProps, 'button'>('button')`
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
  transition: 150ms background ease, 150ms box-shadow ease;

  &:hover,
  &:active {
    transition: 0ms background ease, 150ms box-shadow ease;
  }

  > svg {
    &:first-child {
      margin-right: 4px;
    }
    &:last-child {
      margin-left: 4px;
    }
    &:first-child:last-child {
      margin: 0;
    }
  }

  ${props =>
    (props.fullWidth || '') &&
    `
    margin: 5px 0;
    width: 100%;
  `};

  ${props => {
    const backgroundColor = props.theme![
      `${props.tone || 'buttonPrimary'}Color`
    ];
    const textColor = getTextColor(props, backgroundColor);

    if (props.link)
      return `
    color: ${textColor};

    &:hover {
      text-decoration: underline;
    }
  `;

    return `
    color: ${textColor};
    height: ${props.small ? '22px' : '28px'};
    padding: ${props.small ? '0 3px' : '0 7px'};
    margin: 4px 4px 4px 0;
    vertical-align: middle;

    ${
      props.loading
        ? `
      &:after {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        margin: -9px 0 0 -9px;
        ${showLoaderCss};
      }
    `
        : ''
    }

    ${
      props.ghost
        ? `
       ${!props.disabled &&
         `
         &:hover {
           background: ${rgba(textColor, 0.09)};
         }
         &:active {
           background: ${rgba(textColor, 0.17)};
         }
         &:focus {
           box-shadow: 0 0 3px 3px ${rgba(textColor, 0.25)};
         }
     `}`
        : props.disabled
          ? `
        background: ${tint(
          props.tone === 'light' ? 0.5 : 0.25,
          backgroundColor
        )};
        color: ${tint(0.4, textColor)};
      `
          : `
        background: ${backgroundColor};
        &:hover {
          background: ${darken(0.03, backgroundColor)};
        }
        &:active {
          background: ${darken(0.07, backgroundColor)};
        }
        &:focus {
          box-shadow: 0 0 3px 3px ${rgba(backgroundColor, 0.4)};
        }
      `
    }
  `;
  }};
`;

export interface FullButtonProps extends ButtonProps {
  type?: 'submit';
}

// `type="submit"` is a nasty default and we forget all the time to set this to type="button" manually...
export const Button: React.SFC<FullButtonProps> = props => (
  <StyledButton button="button" disabled={props.loading} {...getProps(props)} />
);
Button.displayName = 'Button';

export interface ExternalLinkProps extends ButtonProps {
  href?: string;
}

const StyledExternalLink = StyledButton.withComponent('a');

export const ExternalLink: React.SFC<ExternalLinkProps> = props => {
  if (props.disabled) {
    return <StyledButton {...getProps(props)} />;
  }
  return <StyledExternalLink {...getProps(props)} />;
};
ExternalLink.displayName = 'ExternalLink';

export interface LinkProps extends ButtonProps {
  to: LocationDescriptor;
}

const StyledLink = StyledButton.withComponent(RouterLink as any);

export const Link: React.SFC<LinkProps> = props => {
  if (props.disabled) {
    return <StyledButton {...getProps(props)} />;
  }
  return <StyledLink {...getProps(props)} />;
};
Link.displayName = 'Link';
