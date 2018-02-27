import PropTypes from 'prop-types';
import * as React from 'react';
import { StyledInput } from './TextInput';
import MaskedInput from 'react-text-mask';
import { pick } from 'lodash';
import createNumberMask from './NumberInput/createNumberMask';

const MyInput = (StyledInput as any).withComponent(({ hasError, ...props }) => (
  <MaskedInput {...props} />
));

export interface NumberInputProps {
  onChange?: (name: string, value: string) => void;
  onBlur?: (name: string, value: string) => void;
  onFocus?: (e: any) => void;
  placeholder?: string;
  disabled?: boolean;
  hasError?: boolean;
  maxLength?: string;
  name?: string;
  id?: string;
  value?: string | number;
  autoFocus?: boolean;
  className?: string;

  prefix?: string;
  suffix?: string;
  includeThousandsSeparator?: boolean;
  thousandsSeparatorSymbol?: string;
  allowDecimal?: boolean;
  allowNegative?: boolean;
  decimalSymbol?: string;
  decimalLimit?: number;
}

export default class NumberInput extends React.PureComponent<
  NumberInputProps,
  {}
> {
  static defaultProps = {
    placeholder: '',
    value: '',
    // text-mask-addons has some default values we don't like; by default we only want to force the field to contain numbers
    prefix: '',
    includeThousandsSeparator: false,
  };

  static contextTypes = {
    formFieldHasError: PropTypes.bool,
  };

  parseValue = e => {
    let value = e.target.value;
    const { prefix, suffix, thousandsSeparatorSymbol } = this.props;
    if (prefix) {
      value = value.replace(prefix, '');
    }
    if (suffix) {
      value = value.replace(suffix, '');
    }
    if (thousandsSeparatorSymbol) {
      // The thousands separator symbol is a visual thingy so should be removed. It can occur multipe times.
      value = value.split(thousandsSeparatorSymbol).join('');
    }

    // TODO: As `value` prop both a string and a number are allowed. However, after a change the value is always a string.
    // Perhaps we can detect that and cast to number?
    return value;
  };

  onChange = e => {
    if (!this.props.onChange) return;

    this.props.onChange(this.props.name, this.parseValue(e));
  };

  onBlur = e => {
    if (!this.props.onBlur) return;

    this.props.onBlur(this.props.name, this.parseValue(e));
  };

  getMask(props) {
    return createNumberMask(
      pick(
        props,
        'prefix',
        'suffix',
        'includeThousandsSeparator',
        'thousandsSeparatorSymbol',
        'allowDecimal',
        'allowNegative',
        'decimalSymbol',
        'decimalLimit'
      )
    );
  }

  render() {
    const value = this.props.value !== null ? this.props.value : '';

    return (
      <MyInput
        name={this.props.name}
        id={this.props.id}
        disabled={this.props.disabled}
        value={value}
        placeholder={this.props.placeholder}
        maxLength={this.props.maxLength}
        onChange={this.onChange}
        onBlur={this.onBlur}
        onFocus={this.props.onFocus}
        autoFocus={this.props.autoFocus}
        hasError={this.props.hasError || this.context.formFieldHasError}
        className={this.props.className}
        guide={false}
        mask={this.getMask(this.props)}
      />
    );
  }
}
