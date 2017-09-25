import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../config';

export const StyledInput = styled(({ hasError, hasDropdown, ...props }) => (
    <input {...props} />
))`
    height: 30px;
    font-size: 14px;
    color: ${props => theme(props, 'textColor')};
    background: ${props => theme(props, 'componentBackground')};
    padding: 0 8px;
    text-decoration: none;
    border-radius: 4px;
    border: 1px solid ${props => theme(props, 'borderColor')};
    width: 100%;

    &:disabled {
        background: ${props => theme(props, 'disabledColor')};
        cursor: not-allowed;
    }

    &::placeholder {
        color: rgba(0, 0, 0, 0.35);
    }

    ${props =>
        props.hasError
            ? `
        border-color: ${theme(props, 'dangerColor')};
        background: #fef2f2;

        &:focus {
            background: ${props => theme(props, 'componentBackground')};
        }
    `
            : `
        &:focus {
            outline: 0;
            border-color: ${theme(props, 'primaryColor')};
        }
    `};

    ${props =>
        props.hasDropdown
            ? `
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    `
            : ''};
`;

export default class TextInput extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        hasError: PropTypes.bool,
        maxLength: PropTypes.string,
        type: PropTypes.oneOf(['text', 'search', 'password', 'email', 'tel']),
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        autoFocus: PropTypes.bool,
        id: PropTypes.string,
    };

    static defaultProps = {
        type: 'text',
        placeholder: '',
        value: '',
    };

    onChange = e => {
        if (!this.props.onChange) return;

        this.props.onChange(this.props.name, e.target.value);
    };

    onBlur = e => {
        if (!this.props.onBlur) return;

        this.props.onBlur(this.props.name, e.target.value);
    };

    render() {
        const value = this.props.value !== null ? this.props.value : '';

        const sharedProps = {
            name: this.props.name,
            disabled: this.props.disabled,
            value: value,
            placeholder: this.props.placeholder,
            maxLength: this.props.maxLength,
            onChange: this.onChange,
            onBlur: this.onBlur,
            autoFocus: this.props.autoFocus,
            hasError: this.props.hasError,
            id: this.props.id,
        };

        return <StyledInput type={this.props.type} {...sharedProps} />;
    }
}
