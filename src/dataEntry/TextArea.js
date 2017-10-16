import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { theme } from '../config';
import AutoTextarea from 'react-textarea-autosize';

export const StyledTextarea = styled.textarea`
    font-size: 14px;
    color: ${props => theme(props, 'textColor')};
    background: ${props =>
        props.hasError ? '#fef2f2' : theme(props, 'componentBackground')};
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    border: 1px solid
        ${props =>
            theme(props, props.hasError ? 'dangerColor' : 'borderColor')};
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
        border-color: ${props =>
            !props.hasError && theme(props, 'primaryColor')};
    }
`;

const StyledAutoTextarea = StyledTextarea.withComponent(AutoTextarea);

export default class TextArea extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        maxLength: PropTypes.string,
        name: PropTypes.string,
        id: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        autoFocus: PropTypes.bool,
        autoSize: PropTypes.bool,
        onBlur: PropTypes.func,
        hasError: PropTypes.bool,
        rows: PropTypes.number,
        maxRows: PropTypes.number,
    };

    static defaultProps = {
        placeholder: '',
        value: '',
        onBlur() {},
        rows: 4,
    };

    onChange = e => {
        if (!this.props.onChange) return;
        let value = e.target.value;
        this.props.onChange(this.props.name, value);
    };

    render() {
        const value = this.props.value !== null ? this.props.value : '';

        const sharedProps = {
            name: this.props.name,
            id: this.props.id,
            value: value,
            maxLength: this.props.maxLength,
            autoFocus: this.props.autoFocus,
            disabled: this.props.disabled,
            hasError: this.props.hasError,
            placeholder: this.props.placeholder,
            onChange: this.onChange,
            onBlur: this.props.onBlur,
        };

        if (this.props.autoSize) {
            return (
                <StyledAutoTextarea
                    {...sharedProps}
                    minRows={this.props.rows}
                    maxRows={this.props.maxRows}
                />
            );
        }

        return <StyledTextarea {...sharedProps} rows={this.props.rows} />;
    }
}
