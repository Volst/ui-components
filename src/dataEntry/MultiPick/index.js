import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import Dropdown from './Dropdown';
import { Container } from './styles';
import { Button } from '../../general/Button';
import KeyboardArrowDown from '../../general/icon/IconKeyboardArrowDown';
import { ValuePropType, OptionsPropType } from '../../PropTypes';
import onClickOutside from 'react-onclickoutside';

class MultiPick extends Component {
    static propTypes = {
        options: OptionsPropType,
        value: PropTypes.arrayOf(ValuePropType).isRequired,
        searchAppearsAfterCount: PropTypes.number,
        searchPlaceholder: PropTypes.string,
        selectedText: PropTypes.string,
        selectAllText: PropTypes.string,
        selectNoneText: PropTypes.string,
        noneSelectedText: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
    };

    static defaultProps = {
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
                return (
                    item.label
                        .toLowerCase()
                        .indexOf(searchValue.toLowerCase()) >= 0
                );
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
                <Button
                    onClick={this.handleToggle}
                    disabled={this.props.disabled}
                >
                    {this.generateButtonText()}
                    <KeyboardArrowDown />
                </Button>
                {this.renderDropdown()}
            </Container>
        );
    }
}

export default onClickOutside(MultiPick);
