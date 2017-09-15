import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { COLOR_TEXT } from '../ReCyCleTheme';
import { observer, PropTypes as MobxTypes } from 'mobx-react';
import { t } from 'i18next';

const StyledSelect = styled(({ autoWidth, ...props }) => <select {...props} />)`
    width: ${props => (props.autoWidth ? 'auto' : '100%')};
    height: 30px;
    font-size: 14px;
    color: ${COLOR_TEXT};
    padding: 0 40px 0 10px;
    text-decoration: none;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: #fff;
    background-image: url('data:image/svg+xml;utf8,<svg width="19" height="10" viewBox="0 0 19 10" xmlns="http://www.w3.org/2000/svg"><g stroke="#BED6E4" fill="none" fill-rule="evenodd" stroke-linecap="round"><path d="M.5.5l9 9M18.5.5l-9 9"/></g></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center;
    -moz-appearance: none;
    -webkit-appearance: none;

    &:focus {
        outline: 0;
        border: 1px solid #006b94;
    }

    &:disabled {
        background-color: #f9f9f9;
        cursor: not-allowed;
    }
`;

@observer
export default class SelectInput extends Component {
    static propTypes = {
        children: PropTypes.node,
        onChange: PropTypes.func,
        name: PropTypes.string,
        disabled: PropTypes.bool,
        placeholder: PropTypes.string,
        skipPlaceholder: PropTypes.bool,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        options: MobxTypes.arrayOrObservableArray.isRequired,
        formatOption: PropTypes.func,
        autoWidth: PropTypes.bool,
    };

    static defaultProps = {
        formatOption(option) {
            return {
                value: option.id,
                label: option.name,
            };
        },
    };

    onChange = e => {
        if (!this.props.onChange) return;

        this.props.onChange(this.props.name, e.target.value);
    };

    renderOption = option => {
        const { value, label } = this.props.formatOption(option);
        return (
            <option key={value} value={value}>
                {label}
            </option>
        );
    };

    render() {
        return (
            <StyledSelect
                name={this.props.name}
                value={this.props.value || ''}
                onChange={this.onChange}
                disabled={this.props.disabled}
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
