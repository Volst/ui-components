import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { SingleDatePicker as RSingleDatePicker } from 'react-dates';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import DatePickerWrapper from './DatePickerWrapper';
import moment from 'moment';
import { withTheme } from 'styled-components';
import { theme } from '../config';

@withTheme
@observer
export default class SingleDatePicker extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        name: PropTypes.string,
        placeholder: PropTypes.string,
        value: PropTypes.instanceOf(moment),
        disabled: PropTypes.bool,
        isOutsideRange: PropTypes.func,
    };

    static defaultProps = {
        placeholder: '',
        value: null,
    };

    handleChange = value => {
        if (!this.props.onChange) return;

        this.props.onChange(this.props.name, value);
    };

    @observable focused = false;

    handleFocusChange = ({ focused }) => {
        this.focused = focused;
    };

    render() {
        // TODO: currently you cannot use most props you might need from the react-dates component
        return (
            <DatePickerWrapper focused={this.focused}>
                <RSingleDatePicker
                    onDateChange={this.handleChange}
                    date={this.props.value}
                    disabled={this.props.disabled}
                    placeholder={this.props.placeholder}
                    onFocusChange={this.handleFocusChange}
                    focused={this.focused}
                    numberOfMonths={1}
                    displayFormat={theme(this.props, 'dateFormat')}
                    hideKeyboardShortcutsPanel
                    firstDayOfWeek={1}
                    isOutsideRange={this.props.isOutsideRange}
                />
            </DatePickerWrapper>
        );
    }
}
