import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { omit } from 'lodash';
import { COLOR_TEXT, COLOR_RED } from '../ReCyCleTheme';

// TODO: I really don't like this `omit` hack...
const getComponentProps = props =>
    omit(props, ['uppercase', 'compact', 'hasError']);

export const StyledInput = styled(props =>
    <input {...getComponentProps(props)} />
)`
    height: 30px;
    font-size: 14px;
    color: ${COLOR_TEXT};
    background: #fff;
    padding: 0 8px;
    text-decoration: none;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;

    &:disabled {
        background: #f9f9f9;
        cursor: not-allowed;
    }

    &::placeholder {
        color: rgba(0, 0, 0, 0.35);
    }

    ${props =>
        props.hasError
            ? `
        border-color: ${COLOR_RED};
        background: #fef2f2;

        &:focus {
            background: #fff;
        }
    `
            : `
        &:focus {
            outline: 0;
            border-color: #006b94;
        }
    `}
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
        };

        return <StyledInput type={this.props.type} {...sharedProps} />;
    }
}
