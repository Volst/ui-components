import PropTypes from 'prop-types';
import * as React from 'react';
import { StyledInput } from './TextInput';
import * as moment from 'moment';
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';

// TODO: properly fix types
const StyledMaskedInput = (StyledInput as any).withComponent(
  ({ hasError, _ref, ...props }) => <MaskedInput {...props} ref={_ref} />
);

const TIME_MASK = [/\d/, /\d/, ':', /\d/, /\d/];

interface TimeInputProps {
  onChange: (name: string, value: moment.Moment) => void;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  hasError?: boolean;
  id?: string;
  autoFocus?: boolean;
  value?: moment.Moment;
}

export default class TimeInput extends React.PureComponent<TimeInputProps, {}> {
  static defaultProps = {
    placeholder: ' ',
    value: '',
  };

  static contextTypes = {
    formFieldHasError: PropTypes.bool,
  };

  onChange = e => {
    // When the user is still typing, we don't want to trigger an update,
    // because at that point the time is not a valid moment instance yet.
    const value = e.target.value.replace(/_/g, '');
    if (!this.props.onChange || value.length < 5) return;

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
      <StyledMaskedInput
        name={this.props.name}
        placeholder={this.props.placeholder}
        disabled={this.props.disabled}
        hasError={this.props.hasError || this.context.formFieldHasError}
        id={this.props.id}
        autoFocus={this.props.autoFocus}
        value={formatted}
        onChange={this.onChange}
        mask={TIME_MASK}
        pipe={createAutoCorrectedDatePipe('HH:MM')}
        keepCharPositions
      />
    );
  }
}
