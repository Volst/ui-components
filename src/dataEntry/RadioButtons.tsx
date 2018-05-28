import * as React from 'react';
import { ValuePropType, OptionsPropType } from '../PropTypes';
import { styled, ThemeProps } from '../styled-components';
import { readableColor } from '../config';
import { uniqueId } from 'lodash';

interface StyledDivProps extends ThemeProps {
  vertical?: boolean;
  focus?: boolean;
}

const StyledDiv = styled<StyledDivProps, 'div'>('div')`
  -webkit-touch-callout: none;
  user-select: none;
  display: flex;
  align-items: stretch;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  flex-wrap: nowrap;
  border: 1px solid transparent;
  border-radius: 4px;
  ${props =>
    (props.focus || '') &&
    `
      label {
          border-color: ${props.theme.primaryColor};
      }
    `};
`;

interface OptionProps {
  vertical?: boolean;
}

const Option = styled<OptionProps, 'div'>('div')`
  flex: 1;
  display: flex;
  justify-content: center;

  &:first-child > label {
    ${props =>
      props.vertical
        ? `
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          border-top-width: 1px;
          `
        : `
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          border-left-width: 1px;
        `};
  }

  &:last-child > label {
    ${props =>
      props.vertical
        ? `
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          `
        : `
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        `};
  }
`;

interface StyledLabelProps extends ThemeProps {
  vertical?: boolean;
  disabled?: boolean;
}

const StyledLabel = styled<StyledLabelProps, 'label'>('label')`
  flex: 1;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  padding: 5px;
  text-align: center;
  border: 1px solid ${props => props.theme.borderColor};
  ${props =>
    props.vertical
      ? `
        border-top-width: 0;
        `
      : `
        border-left-width: 0;
    `};
  background: ${props =>
    props.theme[props.disabled ? 'disabledColor' : 'componentBackground']};
  font-size: 14px;
  color: ${props => props.theme.textColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface StyledInputProps extends ThemeProps {
  vertical?: boolean;
  disabled?: boolean;
}

const StyledInput = styled<StyledInputProps, 'input'>('input')`
  position: fixed;
  left: -999999px;
  opacity: 0;
  &:checked + label {
    ${props => {
      const background = props.disabled
        ? props.theme!.borderColor
        : props.theme!.primaryColor;
      return `
        background: ${background};
        border-color: ${background};
        box-shadow: ${`${
          props.vertical ? '0px -1px' : '-1px 0'
        } ${background}`};
        color: ${readableColor(background)};
      `;
    }};
  }
`;

export interface RadioButtonsProps {
  onChange: (name: string, value: ValuePropType) => void;
  name: string;
  disabled?: boolean;
  options: OptionsPropType;
  value?: ValuePropType;
  vertical?: boolean;
}

export default class RadioButtons extends React.PureComponent<
  RadioButtonsProps,
  { hasFocus: boolean }
> {
  state = {
    hasFocus: false,
  };

  handleChange = value => {
    if (!this.props.disabled) {
      this.props.onChange(this.props.name, value);
    }
  };

  renderItem = item => {
    const handleChange = () => this.handleChange(item.value);
    const id = `radiobuttons-${uniqueId()}`;

    return (
      <Option key={item.value} vertical={this.props.vertical}>
        <StyledInput
          id={id}
          tabIndex={0}
          type="radio"
          name={this.props.name}
          checked={item.value === this.props.value}
          onChange={handleChange}
          disabled={this.props.disabled}
          vertical={this.props.vertical}
        />
        <StyledLabel
          htmlFor={id}
          disabled={this.props.disabled}
          vertical={this.props.vertical}
        >
          {item.label}
        </StyledLabel>
      </Option>
    );
  };

  handleFocus = () => {
    this.setState({ hasFocus: true });
  };

  handleBlur = () => {
    this.setState({ hasFocus: false });
  };

  render() {
    return (
      <StyledDiv
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        focus={this.state.hasFocus}
        vertical={this.props.vertical}
      >
        {this.props.options.map(this.renderItem)}
      </StyledDiv>
    );
  }
}
