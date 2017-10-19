import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { t } from 'i18next';
import { ValuePropType, OptionsPropType } from '../PropTypes';

const StyledSelect = styled(({ autoWidth, hasError, ...props }) => (
    <select {...props} />
))`
    width: ${props => (props.autoWidth ? 'auto' : '100%')};
    height: 30px;
    font-size: 14px;
    color: ${props => props.theme.textColor};
    padding: 0 40px 0 10px;
    text-decoration: none;
    border-radius: 4px;
    border: 1px solid
        ${props => props.theme[props.hasError ? 'dangerColor' : 'borderColor']};
    background-color: ${props =>
        props.hasError ? '#fef2f2' : props.theme.componentBackground};
    background-image: url('data:image/svg+xml;utf8,<svg width="19" height="10" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg"><g stroke="#BED6E4" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M.5.5l9 9M18.5.5l-9 9"/></g></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center;
    -moz-appearance: none;
    -webkit-appearance: none;

    &:focus {
        outline: 0;
        border: 1px solid
            ${props => !props.hasError && props.theme.primaryColor};
    }

    &:disabled {
        background-color: ${props => props.theme.disabledColor};
        cursor: not-allowed;
    }
`;

export default class SelectInput extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        onChange: PropTypes.func,
        name: PropTypes.string,
        id: PropTypes.string,
        disabled: PropTypes.bool,
        hasError: PropTypes.bool,
        placeholder: PropTypes.string,
        skipPlaceholder: PropTypes.bool,
        value: ValuePropType,
        options: OptionsPropType,
        autoWidth: PropTypes.bool,
    };

    onChange = e => {
        if (!this.props.onChange) return;

        this.props.onChange(this.props.name, e.target.value);
    };

    renderOption = option => {
        return (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        );
    };

    render() {
        return (
            <StyledSelect
                name={this.props.name}
                id={this.props.id}
                value={this.props.value || ''}
                onChange={this.onChange}
                disabled={this.props.disabled}
                hasError={this.props.hasError}
                autoWidth={this.props.autoWidth}
            >
                {!this.props.skipPlaceholder && (
                    <option value="">
                        {this.props.placeholder || t('form.selectPlaceholder')}
                    </option>
                )}
                {this.props.options.map(this.renderOption)}
            </StyledSelect>
        );
    }
}
