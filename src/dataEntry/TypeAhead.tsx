import PropTypes from 'prop-types';
import * as React from 'react';
import Downshift, { DownshiftState } from 'downshift';
import { StyledInput } from './TextInput';
import {
  DropdownContainer,
  Dropdown,
  DropdownItem,
  DropdownGroupLabel,
} from './FancySelect';
import { ValuePropType, OptionsPropType } from '../PropTypes';

export interface TypeAheadProps {
  onChange: (name: string, value: string) => void;
  onSelect: (value: ValuePropType) => void;
  name: string;
  disabled?: boolean;
  hasError?: boolean;
  value?: ValuePropType;
  options: OptionsPropType;
}

// Options can be nested, but nested options should still have a unique index.
// I'm sure there is a beter way, but I don't see it for now.
export function addFlatIndexToOptions(options) {
  let myIndex = -1;
  function maybeAddIndex(option, index) {
    return option.options
      ? {
          ...option,
          options: option.options.map(maybeAddIndex),
        }
      : {
          ...option,
          index: (myIndex += 1),
        };
  }
  return options.map(maybeAddIndex);
}

export default class TypeAhead extends React.PureComponent<TypeAheadProps> {
  static contextTypes = {
    formFieldHasError: PropTypes.bool,
  };

  handleSelect = option => {
    this.props.onSelect(option.value);
  };

  handleStateChange = (changes: DownshiftState) => {
    if (changes.hasOwnProperty('inputValue')) {
      this.props.onChange(this.props.name, changes.inputValue || '');
    }
  };

  renderItem({ item, getItemProps, selectedItem, highlightedIndex, nested }) {
    if (item.options) {
      return (
        <React.Fragment key={item.value}>
          <DropdownGroupLabel>{item.label}</DropdownGroupLabel>
          {this.renderItems({
            nested: true,
            getItemProps,
            highlightedIndex,
            selectedItem,
            options: item.options,
          })}
        </React.Fragment>
      );
    }
    return (
      <DropdownItem
        {...getItemProps({
          key: item.value,
          index: item.index,
          item,
          highlighted: highlightedIndex === item.index,
          selected: selectedItem === item,
          nested,
        })}
      >
        {item.label}
      </DropdownItem>
    );
  }
  renderItems = ({
    options,
    getItemProps,
    highlightedIndex,
    selectedItem,
    nested,
  }) => {
    return options.map(item =>
      this.renderItem({
        item,
        getItemProps,
        selectedItem,
        highlightedIndex,
        nested,
      })
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
    const options = addFlatIndexToOptions(this.props.options);

    const hasOptions = options.length > 0;

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
                hasOptions && (
                  <Dropdown>
                    {this.renderItems({
                      options,
                      getItemProps,
                      highlightedIndex,
                      selectedItem,
                      nested: false,
                    })}
                  </Dropdown>
                )}
            </DropdownContainer>
          )}
        </Downshift>
      </div>
    );
  }
}
