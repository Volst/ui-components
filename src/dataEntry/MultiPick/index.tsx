import * as React from 'react';
import { t } from 'i18next';
import Dropdown from './Dropdown';
import { Container, MultiPickButton } from './styles';
import KeyboardArrowDown from '../../general/icon/IconKeyboardArrowDown';
import { ValuePropType, OptionsPropType } from '../../PropTypes';
import onClickOutside from 'react-onclickoutside';

interface MultiPickProps {
  options: OptionsPropType;
  value: ValuePropType[];
  searchAppearsAfterCount: number;
  searchPlaceholder?: string;
  selectedText?: string;
  selectAllText?: string;
  selectNoneText?: string;
  noneSelectedText?: string;
  onChange: (value: ValuePropType[]) => void;
  disabled?: boolean;
}

interface MultiPickState {
  opened: boolean;
  searchValue: string;
}

class MultiPick extends React.Component<MultiPickProps, MultiPickState> {
  static defaultProps: Partial<MultiPickProps> = {
    searchAppearsAfterCount: 5,
  };

  state = {
    opened: false,
    searchValue: '',
  };

  generateButtonText = () => {
    const { options, value, selectedText, noneSelectedText } = this.props;
    if (value.length > 0) {
      return (selectedText || t('form.multiPick.selectedText'))
        .replace('$1', value.length)
        .replace('$2', options.length);
    }
    return noneSelectedText || t('form.multiPick.noneSelectedText');
  };

  handleToggle = () => {
    this.setState(prevState => ({ opened: !prevState.opened }));
  };

  hideOverlay = () => {
    this.setState({ opened: false });
  };

  handleClickOutside = () => {
    this.hideOverlay();
  };

  handleSearchChange = searchValue => {
    this.setState({
      searchValue,
    });
  };

  filterData(data, searchValue) {
    if (searchValue !== '') {
      return data.filter(item => {
        return item.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
      });
    }
    return data;
  }

  renderDropdown = () => {
    if (this.state.opened) {
      return (
        <Dropdown
          {...this.props}
          filteredOptions={this.filterData(
            this.props.options,
            this.state.searchValue
          )}
          searchValue={this.state.searchValue}
          onSearchChange={this.handleSearchChange}
        />
      );
    }
    return null;
  };

  render() {
    return (
      <Container>
        <MultiPickButton
          onClick={this.handleToggle}
          disabled={this.props.disabled}
        >
          {this.generateButtonText()}
          <KeyboardArrowDown />
        </MultiPickButton>
        {this.renderDropdown()}
      </Container>
    );
  }
}

export default onClickOutside(MultiPick);
