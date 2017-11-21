import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

export const StyledInput = styled(
    ({ hasError, hasDropdown, _ref, ...props }) => (
        <input {...props} ref={_ref} />
    )
)`
    height: 30px;
    font-size: 14px;
    color: ${props => props.theme.textColor};
    background: ${props => props.theme.componentBackground};
    padding: 0 8px;
    text-decoration: none;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.borderColor};
    width: 100%;

    &:disabled {
        background: ${props => props.theme.disabledColor};
        cursor: not-allowed;
    }

    &::placeholder {
        color: rgba(0, 0, 0, 0.35);
    }

    ${props =>
        props.hasError
            ? `
        border-color: ${props.theme.dangerColor};
        background: #fef2f2;

        &:focus {
            background: ${props => props.theme.componentBackground};
        }
    `
            : `
        &:focus {
            outline: 0;
            border-color: ${props.theme.primaryColor};
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

export default class TextInput extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        hasError: PropTypes.bool,
        maxLength: PropTypes.string,
        type: PropTypes.oneOf(['text', 'search', 'password', 'email', 'tel']),
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        autoFocus: PropTypes.bool,
        className: PropTypes.string,
        id: PropTypes.string,
        autoComplete: PropTypes.bool,
        spellCheck: PropTypes.bool,
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

    setInputRef = c => {
        this.inputRef = c;
    };

    // This method can be used externally; it's just a convenience method
    // since a "normal" <input> element also has a `.focus()` method
    focus() {
        this.inputRef.focus();
    }

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
            onFocus: this.props.onFocus,
            autoFocus: this.props.autoFocus,
            hasError: this.props.hasError,
            className: this.props.className,
            id: this.props.id,
            autoComplete: this.props.autoComplete === false ? 'off' : undefined,
            spellCheck: this.props.spellCheck === false ? 'false' : undefined,
        };

        return (
            <StyledInput
                type={this.props.type}
                {...sharedProps}
                _ref={this.setInputRef}
            />
        );
    }
}
