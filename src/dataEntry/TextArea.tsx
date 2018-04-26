import PropTypes from 'prop-types';
import * as React from 'react';
import {
  styled,
  ThemeProps,
  StyledComponentClass,
  ThemeInterface,
} from '../styled-components';
import AutoTextarea from 'react-textarea-autosize';
import { rgba } from 'polished';

export interface StyledTextareaProps
  extends ThemeProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}
const InnerTextarea: React.SFC<StyledTextareaProps> = ({
  hasError,
  ...props
}) => <textarea {...props} />;
export const StyledTextarea = styled(InnerTextarea)`
  font-size: 14px;
  color: ${props => props.theme.textColor};
  background: ${props =>
    props.hasError ? '#fef2f2' : props.theme.componentBackground};
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.borderColor};
  width: 100%;
  resize: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.35);
  }

  &:disabled {
    background: ${props => props.theme.disabledColor};
    cursor: not-allowed;
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
`;

const StyledAutoTextarea = (StyledTextarea as any).withComponent(
  ({ hasError, ...props }) => <AutoTextarea {...props} />
);

export interface TextAreaProps {
  onChange?: (name: string, value: string) => void;
  onBlur?: (name: string, value: string) => void;
  onFocus?: () => void;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  hasError?: boolean;
  id?: string;
  autoFocus?: boolean;
  value?: string | number;
  className?: string;
  spellCheck?: boolean;
  maxLength?: number;
  autoSize?: boolean;
  rows?: number;
  maxRows?: number;
}

export default class TextArea extends React.PureComponent<TextAreaProps, {}> {
  static defaultProps = {
    placeholder: '',
    value: '',
    rows: 4,
  };

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

  render() {
    const value = this.props.value !== null ? this.props.value : '';

    const sharedProps = {
      name: this.props.name,
      id: this.props.id,
      value: value,
      maxLength: this.props.maxLength,
      autoFocus: this.props.autoFocus,
      disabled: this.props.disabled,
      hasError: this.props.hasError || this.context.formFieldHasError,
      placeholder: this.props.placeholder,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: this.props.onFocus,
      className: this.props.className,
      spellCheck: this.props.spellCheck === false ? false : undefined,
    };

    if (this.props.autoSize) {
      return (
        <StyledAutoTextarea
          {...sharedProps}
          minRows={this.props.rows}
          maxRows={this.props.maxRows}
        />
      );
    }

    return <StyledTextarea {...sharedProps} rows={this.props.rows} />;
  }
}
