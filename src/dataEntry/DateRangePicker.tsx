import * as React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import { t } from 'i18next';
import { Button } from '../general/Button';
import IconClear from '../general/icon/IconClear';
import IconNavigateNext from '../general/icon/IconNavigateNext';
import { styledTs, styled, withTheme } from '../styled-components';
import DatePickerWrapper from './DatePickerWrapper';
import { DateUtils } from 'react-day-picker/utils';
import DayPicker from 'react-day-picker/DayPicker';
import { ThemeInterface } from '../config';

function toDate(moment) {
  return moment ? moment.toDate() : undefined;
}

interface CombinedInputProps {
  hasError?: boolean;
}

const CombinedInput = styledTs<CombinedInputProps>(styled.div)`
  height: 30px;
  display: flex;
  background: ${props => props.theme.componentBackground};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
  font-size: 14px;
  align-items: center;

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
  padding-left: 10px;
  cursor: ${props => (props.onClick ? 'pointer' : 'not-allowed')};
  user-select: none;
`;

interface DateRangePickerProps {
  name: string;
  onChange: (
    name: string,
    value: { startDate?: moment.Moment; endDate?: moment.Moment }
  ) => void;
  startDate?: moment.Moment;
  endDate?: moment.Moment;
  disabled?: boolean;
  showWeekNumbers?: boolean;
  disabledDays?: any; // TODO add proper validation; it can be either an object or a function.
  hasError?: boolean;
  placeholder?: string;
  theme: ThemeInterface;
}

class DateRangePicker extends React.Component<
  DateRangePickerProps,
  { opened: boolean }
> {
  state = {
    opened: false,
  };

  static defaultProps = {
    showWeekNumbers: true,
  };

  static contextTypes = {
    formFieldHasError: PropTypes.bool,
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
        <CombinedInput
          hasError={this.props.hasError || this.context.formFieldHasError}
        >
          <CombinedInputItem onClick={onClick}>
            {startDate
              ? startDate.format(theme.dateFormat)
              : this.props.placeholder || t('form.dateRangePlaceholder')}
          </CombinedInputItem>
          <IconNavigateNext width="22" height="22" />
          <CombinedInputItem onClick={onClick}>
            {endDate && endDate.format(theme.dateFormat)}
          </CombinedInputItem>
          <Button
            ghost
            small
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

export default withTheme(DateRangePicker);
