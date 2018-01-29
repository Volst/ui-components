import PropTypes from 'prop-types';
import * as React from 'react';
import Downshift from 'downshift';
import styled from 'styled-components';
import IconArrowDropDown from '../general/icon/IconArrowDropDown';
import IconArrowDropUp from '../general/icon/IconArrowDropUp';
import { Button } from '../general/Button';
import { ValuePropType, OptionsPropType } from '../PropTypes';
import {
  Dropdown,
  DropdownItem,
  DropdownContainer,
  DropdownToggle,
  fuzzySearch,
} from './FancySelect';
import { readableColor } from '../config';
import AutosizeInput from 'react-input-autosize';

// This should look like <TextInput /> as much as possible.
const InputValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 1px 30px 1px 1px;
  border: 1px solid ${props => props.theme.borderColor};
  background: ${props => props.theme.componentBackground};
  border-radius: 4px;
  outline: 0;

  ${props =>
    props.disabled &&
    `
        background: ${props.theme.disabledColor};
    `};
  ${props =>
    props.hasError &&
    `
        border-color: ${props.theme.dangerColor};
        background: ${
          props.focused ? props.theme.componentBackground : '#fef2f2'
        };
        `};
  ${props =>
    props.focused &&
    `
        border-color: ${props.theme.primaryColor};
    `};
  ${props =>
    props.hasDropdown &&
    `
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    `};
`;

const TagValue = styled.div`
  background: ${props => (props.disabled ? '#aaa' : props.theme.primaryColor)};
  color: ${props => readableColor(props.theme.primaryColor)};
  padding: 3px 5px;
  border-radius: 2px;
  margin: 2px;
  font-size: 14px;
  display: flex;
  max-width: 100%;
`;

const TagText = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Input = styled(AutosizeInput)`
  max-width: 100%;

  input {
    border: none;
    outline: none;
    cursor: inherit;
    background-color: transparent;
    font-size: 14px;
    color: ${props => props.theme.textColor};
    padding: 4px;
    max-width: 100%;
  }
`;

// TODO: I got lazy
const CloseButton = styled.span`
  cursor: pointer;
  margin-left: 4px;
`;

export default class MultiSelect extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    value: PropTypes.arrayOf(ValuePropType).isRequired,
    options: OptionsPropType,
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
  };

  static contextTypes = {
    formFieldHasError: PropTypes.bool,
  };

  state = { inputValue: '', focused: false };

  handleItemAdd = option => {
    this.setState({ inputValue: '' });
    if (this.props.value.indexOf(option.value) === -1) {
      this.props.onChange(this.props.name, [...this.props.value, option.value]);
    }
  };

  handleItemRemove = option => {
    const newValue = this.props.value.slice();
    const index = newValue.indexOf(option.value);
    if (index >= 0) {
      newValue.splice(index, 1);
      this.props.onChange(this.props.name, newValue);
    }
  };

  handleInputChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleWrapperClick = e => {
    if (this._inputWrapper === e.target || this._input === e.target) {
      this.focusOnInput();
      e.stopPropagation();
      e.preventDefault();
    }
  };

  focusOnInput() {
    this._input.focus();
    if (typeof this._input.getInput === 'function') {
      this._input.getInput().focus();
    }
  }

  popValue() {
    const newValue = this.props.value.slice();
    newValue.pop();
    this.props.onChange(this.props.name, newValue);
  }

  handleInputKeyDown = e => {
    const currentValue = e.target.value;
    switch (e.keyCode) {
      case 8: // backspace
        if (!currentValue) {
          e.preventDefault();
          this.popValue();
        }
        return;
      case 46: // backspace
        if (!this.state.inputValue) {
          e.preventDefault();
          this.popValue();
        }
        return;
      default:
        return;
    }
  };

  renderDropdown = ({
    isOpen,
    getItemProps,
    inputValue,
    highlightedIndex,
    selectedItem,
    options,
  }) => {
    return (
      <Dropdown>
        {options.map((item, index) => (
          <DropdownItem
            {...getItemProps({
              key: item.value,
              index,
              item,
              highlighted: highlightedIndex === index,
            })}
          >
            {item.label}
          </DropdownItem>
        ))}
      </Dropdown>
    );
  };

  itemToString(item) {
    if (item == null) {
      return '';
    }
    return item.label;
  }

  renderDownshift = ({
    getRootProps,
    getInputProps,
    getItemProps,
    isOpen,
    inputValue,
    highlightedIndex,
    selectedItem,
    openMenu,
    toggleMenu,
    clearItems,
    ...rest
  }) => {
    const options = fuzzySearch(this.props.options, this.state.inputValue);
    const unselectedOptions = options.filter(
      item => !selectedItem.includes(item)
    );
    const actuallyOpen = isOpen && unselectedOptions.length > 0;

    const inputProps = getInputProps({
      value: this.state.inputValue,
      onChange: this.handleInputChange,
      innerRef: c => (this._input = c),
      onKeyDown: this.handleInputKeyDown,
      disabled: this.props.disabled,
    });
    return (
      <DropdownContainer {...getRootProps({ refKey: 'innerRef' })}>
        <InputValueWrapper
          onClick={e =>
            !this.props.disabled && (openMenu() || this.handleWrapperClick(e))
          }
          innerRef={c => (this._inputWrapper = c)}
          tabIndex="-1"
          hasDropdown={actuallyOpen}
          focused={this.state.focused}
          onFocus={() =>
            !this.props.disabled && this.setState({ focused: true })
          }
          onBlur={() => this.setState({ focused: false })}
          hasError={this.props.hasError || this.context.formFieldHasError}
          disabled={this.props.disabled}
        >
          {selectedItem.map(item => (
            <TagValue key={item.value} disabled={this.props.disabled}>
              <TagText>{item.label} </TagText>
              {!this.props.disabled && (
                <CloseButton onClick={() => this.handleItemRemove(item)}>
                  ×
                </CloseButton>
              )}
            </TagValue>
          ))}
          <Input {...inputProps} />
          <DropdownToggle>
            <Button
              ghost
              disabled={this.props.disabled}
              onClick={toggleMenu}
              tabIndex={-1}
            >
              {actuallyOpen ? <IconArrowDropUp /> : <IconArrowDropDown />}
            </Button>
          </DropdownToggle>
        </InputValueWrapper>
        {actuallyOpen &&
          this.renderDropdown({
            getItemProps,
            inputValue,
            highlightedIndex,
            selectedItem,
            options: unselectedOptions,
          })}
      </DropdownContainer>
    );
  };

  render() {
    const value = this.props.value;

    return (
      <Downshift
        selectedItem={value.map(
          v => this.props.options.find(o => o.value === v) || v
        )}
        onChange={this.handleItemAdd}
        itemToString={this.itemToString}
        defaultHighlightedIndex={0}
      >
        {this.renderDownshift}
      </Downshift>
    );
  }
}
