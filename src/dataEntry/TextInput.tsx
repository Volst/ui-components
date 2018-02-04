import PropTypes from 'prop-types';
import * as React from 'react';
import { styled, ThemeProps } from '../styled-components';
import { rgba } from 'polished';

// TODO: yes, these typings suck.
interface StyledInputProps
  extends ThemeProps,
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > {
  hasError?: boolean;
  hasDropdown?: boolean;
  _ref?: (c: any) => void;
}

const InnerInput: React.SFC<StyledInputProps> = ({
  hasError,
  hasDropdown,
  _ref,
  ...props
}) => <input {...props} ref={_ref} />;

export const StyledInput = styled(InnerInput)`
  font-size: 14px;
  color: ${props => props.theme.textColor};
  background: ${props => props.theme.componentBackground};
  padding: 6px 8px;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.borderColor};
  width: 100%;

  &:disabled {
    background: ${props => props.theme.disabledColor};
    cursor: not-allowed;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.35);
  }

  transition: 150ms background ease, 150ms box-shadow ease, 150ms border ease;

  ${props =>
    props.hasError
      ? `
        border-color: ${props.theme.dangerColor};
        background: #fef2f2;

        &:focus {
          background: ${props.theme.componentBackground};
          border-color: ${rgba(props.theme.dangerColor, 0.75)};
          box-shadow: 0 0 3px 3px ${rgba(props.theme.dangerColor, 0.25)};
        }
    `
      : `
        &:focus {
          border-color: ${rgba(props.theme.primaryColor, 0.75)};
          box-shadow: 0 0 3px 3px ${rgba(props.theme.primaryColor, 0.25)};
        }
    `};

  ${props =>
    props.hasDropdown
      ? `
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    `
      : ''};
`;

export interface TextInputProps {
  type?: 'text' | 'search' | 'password' | 'email' | 'tel';
  onChange?: (name: string, value: string) => void;
  onBlur?: (name: string, value: string) => void;
  onFocus?: () => void;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  hasError?: boolean;
  id?: string;
  autoFocus?: boolean;
  value?: string | number;
  className?: string;
  autoComplete?: boolean;
  spellCheck?: boolean;
  maxLength?: number;
}

export default class TextInput extends React.PureComponent<TextInputProps, {}> {
  static defaultProps = {
    type: 'text',
    placeholder: '',
    value: '',
  };

  private inputRef: HTMLInputElement;

  static contextTypes = {
    formFieldHasError: PropTypes.bool,
  };

  onChange = e => {
    if (!this.props.onChange) return;

    this.props.onChange(this.props.name, e.target.value);
  };

  onBlur = e => {
    if (!this.props.onBlur) return;

    this.props.onBlur(this.props.name, e.target.value);
  };

  setInputRef = c => {
    this.inputRef = c;
  };

  // This method can be used externally; it's just a convenience method
  // since a "normal" <input> element also has a `.focus()` method
  focus() {
    this.inputRef.focus();
  }

  render() {
    const value = this.props.value !== null ? this.props.value : '';

    const sharedProps = {
      name: this.props.name,
      disabled: this.props.disabled,
      value: value,
      placeholder: this.props.placeholder,
      maxLength: this.props.maxLength,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: this.props.onFocus,
      autoFocus: this.props.autoFocus,
      hasError: this.props.hasError || this.context.formFieldHasError,
      className: this.props.className,
      id: this.props.id,
      autoComplete: this.props.autoComplete === false ? 'off' : undefined,
      spellCheck: this.props.spellCheck === false ? false : undefined,
    };

    return (
      <StyledInput
        type={this.props.type}
        {...sharedProps}
        _ref={this.setInputRef}
      />
    );
  }
}
