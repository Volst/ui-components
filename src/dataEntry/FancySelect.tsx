import PropTypes from 'prop-types';
import * as React from 'react';
import Downshift from 'downshift';
import {
  styled,
  ThemeProps,
  StyledComponent,
  ThemeInterface,
} from '../styled-components';
import { setLightness } from 'polished';
import { readableColor } from '../config';
import IconArrowDropDown from '../general/icon/IconArrowDropDown';
import IconArrowDropUp from '../general/icon/IconArrowDropUp';
import IconClose from '../general/icon/IconClose';
import { StyledInput as TextInput } from './TextInput';
import { Button } from '../general/Button';
import { ValuePropType, OptionsPropType } from '../PropTypes';
import { rgba } from 'polished';

export const DropdownContainer = styled('div')`
  position: relative;
  width: 100%;
`;

export const Dropdown = styled('div')`
  width: 100%;
  border: 1px solid ${props => rgba(props.theme.primaryColor, 0.75)};
  border-top-color: ${props => props.theme.borderColor};
  margin-top: -1px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
  position: absolute;
  z-index: ${props => props.theme.zIndexFancySelectDropdown};
`;

export const DropdownToggle = styled('div')`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export interface DropdownItemProps extends ThemeProps {
  highlighted: boolean;
  selected: boolean;
  nested?: boolean;
}

export const DropdownItem = styled<DropdownItemProps, 'div'>('div')`
  ${props => {
    const background = props.highlighted
      ? setLightness(0.93, props.theme!.primaryColor)
      : props.theme!.componentBackground;
    return `
      background: ${background};
      color: ${readableColor(background)};
    `;
  }};
  font-weight: ${props => (props.selected ? 'bold' : 'normal')};
  padding: ${props => (props.nested ? '6px 6px 6px 16px' : '6px')};
  cursor: default;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DropdownGroupLabel = styled('div')`
  background: ${props => props.theme.componentBackground};
  font-weight: bold;
  color: ${props => readableColor(props.theme.componentBackground)};
  padding: 4px 6px;
  font-size: 90%;
`;

const StyledInput = styled(TextInput)`
  padding-right: 60px;
`;

// Poor man's filtering.
export function fuzzySearch(options: OptionsPropType, inputValue?: string) {
  return options.filter(o =>
    o.label.toLowerCase().includes((inputValue || '').toLowerCase())
  );
}

export interface FancySelectProps {
  onChange: (name: string, value: ValuePropType) => void;
  name: string;
  value?: ValuePropType;
  options: OptionsPropType;
  disabled?: boolean;
  hasError?: boolean;
  placeholder?: string;
}

export default class FancySelect extends React.PureComponent<
  FancySelectProps,
  {}
> {
  static contextTypes = {
    formFieldHasError: PropTypes.bool,
  };

  handleChange = option => {
    this.props.onChange(this.props.name, option.value);
  };

  handleClear = () => {
    this.props.onChange(this.props.name, '');
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
              selected: selectedItem === item.value,
            })}
          >
            {item.label}
          </DropdownItem>
        ))}
      </Dropdown>
    );
  };

  itemToString(item: any) {
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
    const options = fuzzySearch(this.props.options, inputValue);
    const actuallyOpen = isOpen && options.length > 0;

    // When `props.value` is set to an empty string, `getInputProps()` will return `value: undefined`.
    // This leads to a React warning about an controlled component set to uncontrolled.
    // Is this a bug in Downshift or a feature??
    const inputProps = getInputProps();

    return (
      <DropdownContainer {...getRootProps({ refKey: 'innerRef' })}>
        <StyledInput
          {...inputProps}
          value={inputProps.value || ''}
          hasDropdown={actuallyOpen}
          disabled={this.props.disabled}
          hasError={this.props.hasError || this.context.formFieldHasError}
          onClick={openMenu}
          placeholder={this.props.placeholder}
        />
        <DropdownToggle>
          {!!this.props.value && (
            <Button
              ghost
              small
              onClick={() => {
                clearItems();
                this.handleClear();
              }}
              tabIndex={-1}
              disabled={this.props.disabled}
            >
              <IconClose width="16" height="16" />
            </Button>
          )}
          <Button
            ghost
            small
            disabled={this.props.disabled}
            onClick={toggleMenu}
            tabIndex={-1}
          >
            {actuallyOpen ? <IconArrowDropUp /> : <IconArrowDropDown />}
          </Button>
        </DropdownToggle>

        {actuallyOpen &&
          this.renderDropdown({
            getItemProps,
            inputValue,
            isOpen,
            highlightedIndex,
            selectedItem,
            options,
          })}
      </DropdownContainer>
    );
  };

  render() {
    const value = this.props.value || '';

    return (
      <Downshift
        selectedItem={this.props.options.find(o => o.value === value) || value}
        onChange={this.handleChange}
        itemToString={this.itemToString}
        defaultHighlightedIndex={0}
      >
        {this.renderDownshift}
      </Downshift>
    );
  }
}
