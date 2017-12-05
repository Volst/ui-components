import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button } from '../general/Button';
import IconClear from '../general/icon/IconClear';
import styled, { withTheme } from 'styled-components';
import DatePickerWrapper from './DatePickerWrapper';
import DayPicker, { DateUtils } from 'react-day-picker';

function toDate(moment) {
    return moment ? moment.toDate() : undefined;
}

const CombinedInput = styled.div`
    height: 30px;
    display: flex;
    background: ${props => props.theme.componentBackground};
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 4px;
    font-size: 14px;

    ${props =>
        props.hasError &&
        `
        border-color: ${props.theme.dangerColor};
        background: #fef2f2;
        `};
`;

const CombinedInputItem = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-right: 1px solid #ccc;
    cursor: ${props => (props.onClick ? 'pointer' : 'not-allowed')};
    user-select: none;

    & + & {
        border-right: none;
    }
`;

@withTheme
export default class DateRangePicker extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        startDate: PropTypes.instanceOf(moment),
        endDate: PropTypes.instanceOf(moment),
        theme: PropTypes.object.isRequired,
        disabled: PropTypes.bool,
        showWeekNumbers: PropTypes.bool,
        disabledDays: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        hasError: PropTypes.bool,
    };

    state = {
        opened: false,
    };

    static defaultProps = {
        showWeekNumbers: true,
    };

    handleChange = day => {
        const range = DateUtils.addDayToRange(day, {
            from: toDate(this.props.startDate),
            to: toDate(this.props.endDate),
        });
        this.props.onChange(this.props.name, {
            startDate: range.from ? moment(range.from) : null,
            endDate: range.to ? moment(range.to) : null,
        });
    };

    clear = () => {
        this.props.onChange(this.props.name, {
            startDate: null,
            endDate: null,
        });
    };

    toggleOpened = () => {
        this.setState(prevState => ({ opened: !prevState.opened }));
    };

    render() {
        const { startDate, endDate, disabled, theme } = this.props;
        const onClick = disabled ? null : this.toggleOpened;
        const _startDate = toDate(startDate);
        const _endDate = toDate(endDate);
        const modifiers = { start: _startDate, end: _endDate };
        return (
            <div>
                <CombinedInput hasError={this.props.hasError}>
                    <CombinedInputItem onClick={onClick}>
                        {startDate && startDate.format(theme.dateFormat)}
                    </CombinedInputItem>
                    <CombinedInputItem onClick={onClick}>
                        {endDate && endDate.format(theme.dateFormat)}
                    </CombinedInputItem>
                    <Button
                        icon
                        onClick={this.clear}
                        disabled={disabled || !startDate || !endDate}
                    >
                        <IconClear />
                    </Button>
                </CombinedInput>
                {this.state.opened && (
                    <DatePickerWrapper>
                        <DayPicker
                            className="Selectable"
                            numberOfMonths={1}
                            firstDayOfWeek={1}
                            onDayClick={this.handleChange}
                            modifiers={modifiers}
                            month={_endDate}
                            showWeekNumbers={this.props.showWeekNumbers}
                            disabledDays={this.props.disabledDays}
                            selectedDays={[
                                _startDate,
                                {
                                    from: _startDate,
                                    to: _endDate,
                                },
                            ]}
                        />
                    </DatePickerWrapper>
                )}
            </div>
        );
    }
}
