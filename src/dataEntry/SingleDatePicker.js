import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DayPickerInput } from 'react-day-picker';
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

    handleChange = (selectedDay, modifiers) => {
        console.log('selecte', selectedDay, modifiers);
        if (!this.props.onChange) return;

        this.props.onChange(this.props.name, '');
    };

    @observable focused = false;

    handleFocusChange = ({ focused }) => {
        this.focused = focused;
    };

    render() {
        // TODO: currently you cannot use most props you might need from the react-dates component
        const dayPickerProps = {};
        return (
            <DatePickerWrapper focused={this.focused}>
                <DayPickerInput
                    onDayChange={this.handleChange}
                    value={this.props.value}
                    disabled={this.props.disabled}
                    placeholder={this.props.placeholder}
                    format={theme(this.props, 'dateFormat')}
                    dayPickerProps={dayPickerProps}
                />
            </DatePickerWrapper>
        );
    }
}
