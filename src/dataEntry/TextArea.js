import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import AutoTextarea from 'react-textarea-autosize';

export const StyledTextarea = styled(({ hasError, ...props }) => (
  <textarea {...props} />
))`
  font-size: 14px;
  color: ${props => props.theme.textColor};
  background: ${props =>
    props.hasError ? '#fef2f2' : props.theme.componentBackground};
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid
    ${props => props.theme[props.hasError ? 'dangerColor' : 'borderColor']};
  width: 100%;
  resize: none;

  &::placeholder {
    color: rgba(0, 0, 0, 0.35);
  }

  &:disabled {
    background: ${props => props.theme.disabledColor};
    cursor: not-allowed;
  }

  &:focus {
    border-color: ${props => !props.hasError && props.theme.primaryColor};
  }
`;

const StyledAutoTextarea = StyledTextarea.withComponent(
  ({ hasError, ...props }) => <AutoTextarea {...props} />
);

export default class TextArea extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    maxLength: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    autoFocus: PropTypes.bool,
    autoSize: PropTypes.bool,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    hasError: PropTypes.bool,
    rows: PropTypes.number,
    maxRows: PropTypes.number,
    className: PropTypes.string,
    spellCheck: PropTypes.bool,
  };

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
    let value = e.target.value;
    this.props.onChange(value);
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
      onBlur: this.props.onBlur,
      onFocus: this.props.onFocus,
      className: this.props.className,
      spellCheck: this.props.spellCheck === false ? 'false' : undefined,
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
