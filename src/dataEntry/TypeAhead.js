import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Downshift from 'downshift';
import { StyledInput } from './TextInput';
import { DropdownContainer, Dropdown, DropdownItem } from './FancySelect';
import { ValuePropType, OptionsPropType } from '../PropTypes';

export default class TypeAhead extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    name: PropTypes.string,
    value: ValuePropType,
    options: OptionsPropType,
    hasError: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static contextTypes = {
    formFieldHasError: PropTypes.bool,
  };

  handleSelect = option => {
    this.props.onSelect(option.value);
  };

  handleStateChange = changes => {
    if (changes.hasOwnProperty('inputValue')) {
      this.props.onChange(changes.inputValue);
    }
  };

  renderDropdown = ({
    isOpen,
    getItemProps,
    inputValue,
    highlightedIndex,
    selectedItem,
  }) => {
    return (
      <Dropdown>
        {this.props.options.map((item, index) => (
          <DropdownItem
            {...getItemProps({
              key: item.value,
              index,
              item,
              highlighted: highlightedIndex === index,
              selected: selectedItem === item,
            })}
          >
            {item.label}
          </DropdownItem>
        ))}
      </Dropdown>
    );
  };

  itemToString = item => {
    if (item == null) {
      return '';
    }
    if (typeof item === 'string') {
      return item;
    }
    // The item is an object if it is chosen from the autocomplete list.
    // Sometimes you don't want to show the label of the item in the input field, but a shorter version.
    // This is what `item.input` is for.
    return item.input || item.label || '';
  };

  render() {
    const value = this.props.value !== null ? this.props.value : '';
    const hasOptions = this.props.options.length > 0;

    return (
      <div>
        <Downshift
          onStateChange={this.handleStateChange}
          selectedItem={value}
          onChange={this.handleSelect}
          itemToString={this.itemToString}
        >
          {({
            getRootProps,
            getInputProps,
            getItemProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem,
          }) => (
            <DropdownContainer {...getRootProps({ refKey: 'innerRef' })}>
              <StyledInput
                {...getInputProps()}
                hasDropdown={isOpen && hasOptions}
                hasError={this.props.hasError || this.context.formFieldHasError}
                disabled={this.props.disabled}
              />
              {isOpen &&
                hasOptions &&
                this.renderDropdown({
                  getItemProps,
                  inputValue,
                  highlightedIndex,
                  selectedItem,
                })}
            </DropdownContainer>
          )}
        </Downshift>
      </div>
    );
  }
}
