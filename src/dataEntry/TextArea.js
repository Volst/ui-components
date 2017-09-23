import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../config';

export const StyledTextarea = styled.textarea`
    font-size: 14px;
    color: ${props => theme(props, 'textColor')};
    background: ${props => theme(props, 'componentBackground')};
    padding: 8px;
    min-height: 80px;
    text-decoration: none;
    border-radius: 4px;
    border: 1px solid ${props => theme(props, 'borderColor')};
    width: 100%;
    resize: none;

    &::placeholder {
        color: rgba(0, 0, 0, 0.35);
    }

    &:disabled {
        background: ${props => theme(props, 'disabledColor')};
        cursor: not-allowed;
    }

    &:focus {
        outline: 0;
        border: 1px solid ${props => theme(props, 'primaryColor')};
    }
`;

export default class TextArea extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        maxLength: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        autoFocus: PropTypes.bool,
        onBlur: PropTypes.func,
    };

    static defaultProps = {
        placeholder: '',
        value: '',
        onBlur() {},
    };

    onChange = e => {
        if (!this.props.onChange) return;
        let value = e.target.value;
        this.props.onChange(this.props.name, value);
    };

    render() {
        const value = this.props.value !== null ? this.props.value : '';

        return (
            <StyledTextarea
                name={this.props.name}
                value={value}
                maxLength={this.props.maxLength}
                autoFocus={this.props.autoFocus}
                disabled={this.props.disabled}
                placeholder={this.props.placeholder}
                onChange={this.onChange}
                onBlur={this.props.onBlur}
            />
        );
    }
}
