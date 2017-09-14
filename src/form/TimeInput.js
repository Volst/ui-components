import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { StyledInput } from './TextInput';
import RTimeInput from 'react-time-input';
import moment from 'moment';

const MyInput = StyledInput.withComponent(RTimeInput);

@observer
export default class TimeInput extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        placeholder: PropTypes.string,
        name: PropTypes.string,
        disabled: PropTypes.bool,
        // TODO: verify that this is a moment instance!
        value: PropTypes.object,
    };

    static defaultProps = {
        placeholder: ' ',
        value: '',
    };

    onChange = value => {
        if (!this.props.onChange) return;

        let newValue = null;
        if (this.props.value) {
            const split = value.split(':');
            newValue = this.props.value ? this.props.value.clone() : moment();
            newValue.hours(split[0]);
            newValue.minutes(split[1]);
        } else {
            newValue = moment(value, 'HH:mm');
        }
        this.props.onChange(this.props.name, newValue);
    };

    render() {
        const { value } = this.props;
        const formatted = value ? value.format('HH:mm') : '';

        return (
            <MyInput
                name={this.props.name}
                initTime={formatted}
                placeholder={this.props.placeholder}
                disabled={this.props.disabled}
                onTimeChange={this.onChange}
            />
        );
    }
}
