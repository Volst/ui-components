import * as React from 'react';
import { t } from 'i18next';
import Scrollbars from 'react-custom-scrollbars';
import {
  Dropdown,
  DropdownList,
  DropdownItem,
  DropdownActionBar,
  DropdownSearch,
} from './styles';
import Checkbox from '../Checkbox';
import { Button } from '../../general/Button';
import { OptionsPropType, ValuePropType, Tone } from '../../PropTypes';

export interface MultipickDropdownProps {
  options: OptionsPropType;
  value: ValuePropType[];
  filteredOptions: OptionsPropType;
  onChange: (value: ValuePropType[]) => void;
  searchAppearsAfterCount: number;
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  selectAllText?: string;
  selectNoneText?: string;
}

export default class MultipickDropdown extends React.Component<
  MultipickDropdownProps,
  {}
> {
  static defaultProps = {
    searchValue: '',
  };

  handleItemChange = (value, checked) => {
    const newValue = this.props.value.slice();
    const valueIndex = newValue.indexOf(value);
    if (valueIndex >= 0) {
      if (checked) {
        newValue.splice(valueIndex, 1);
      }
    } else if (!checked) {
      newValue.push(value);
    }
    this.props.onChange(newValue);
  };

  handleSearchChange = (name, value) => {
    this.props.onSearchChange(value);
  };

  selectAll = () => {
    this.props.onChange(this.props.options.map(item => item.value));
  };

  selectNone = () => {
    this.props.onChange([]);
  };

  renderItem = item => {
    const checked = this.props.value.indexOf(item.value) >= 0;
    return (
      <DropdownItem key={item.value} checked={checked}>
        <Checkbox
          name="dropdown-item"
          onChange={() => this.handleItemChange(item.value, checked)}
          value={checked}
          label={item.label}
        />
      </DropdownItem>
    );
  };

  renderSearch = () => {
    const { searchValue, searchPlaceholder } = this.props;
    return (
      <DropdownSearch
        type="search"
        autoFocus
        value={searchValue}
        onChange={this.handleSearchChange}
        placeholder={searchPlaceholder || t('form.multiPick.searchPlaceholder')}
      />
    );
  };

  render() {
    const {
      options,
      selectAllText,
      selectNoneText,
      searchAppearsAfterCount,
    } = this.props;
    return (
      <Dropdown>
        {options.length >= searchAppearsAfterCount ? this.renderSearch() : null}
        <DropdownActionBar>
          <Button onClick={this.selectAll} tone={Tone.Light}>
            {selectAllText || t('form.multiPick.selectAllButton')}
          </Button>
          <Button onClick={this.selectNone} tone={Tone.Light}>
            {selectNoneText || t('form.multiPick.selectNoneButton')}
          </Button>
        </DropdownActionBar>
        <DropdownList>
          <Scrollbars>
            {this.props.filteredOptions.map(this.renderItem)}
          </Scrollbars>
        </DropdownList>
      </Dropdown>
    );
  }
}
