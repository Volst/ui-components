import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import DatePickerWrapper from './DatePickerWrapper';
import moment from 'moment';
import { StyledInput } from './TextInput';
import { withTheme } from 'styled-components';
import { theme } from '../config';

// This is not a hack, it is a documented workaround (in react-day-picker)!
class MyInputWithFocus extends Component {
    focus = () => {
        this.input.focus();
    };

    setRef = el => {
        this.input = el;
    };

    render() {
        return <StyledInput _ref={this.setRef} {...this.props} />;
    }
}

@withTheme
export default class SingleDatePicker extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        name: PropTypes.string,
        placeholder: PropTypes.string,
        value: PropTypes.instanceOf(moment),
        disabled: PropTypes.bool,
        disabledDays: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    };

    static defaultProps = {
        placeholder: '',
        value: null,
    };

    handleChange = (selectedDay, { disabled }) => {
        if (!this.props.onChange) return;

        if (!disabled) {
            this.props.onChange(this.props.name, selectedDay);
        }
    };

    render() {
        const dateFormat = theme(this.props, 'dateFormat');
        const value = this.props.value
            ? this.props.value.format(dateFormat)
            : '';
        // TODO: currently you cannot use most props you might need from the react-day-picker component
        const dayPickerProps = {
            disabledDays: this.props.disabledDays,
        };
        return (
            <DatePickerWrapper>
                <DayPickerInput
                    component={MyInputWithFocus}
                    onDayChange={this.handleChange}
                    value={value}
                    disabled={this.props.disabled}
                    placeholder={this.props.placeholder}
                    format={dateFormat}
                    dayPickerProps={dayPickerProps}
                />
            </DatePickerWrapper>
        );
    }
}
