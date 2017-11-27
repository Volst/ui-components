import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';

import {
    Dropdown,
    DropdownList,
    DropdownItem,
    DropdownActionBar,
    DropdownAction,
    DropdownSearch,
} from './styles';

export default class MultipickDropdown extends Component {
    static propTypes = {
        options: PropTypes.array.isRequired,
        value: PropTypes.array.isRequired,
        filteredOptions: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired,
        searchAppearsAfterCount: PropTypes.number.isRequired,
        searchValue: PropTypes.string.isRequired,
        onSearchChange: PropTypes.func.isRequired,
        searchPlaceholder: PropTypes.string,
        selectAllText: PropTypes.string,
        selectNoneText: PropTypes.string,
    };

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

    handleSearchChange = e => {
        this.props.onSearchChange(e.currentTarget.value);
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
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => this.handleItemChange(item.value, checked)}
                />
                {item.label}
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
                placeholder={
                    searchPlaceholder || t('form.multiPick.searchPlaceholder')
                }
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
                {options.length >= searchAppearsAfterCount
                    ? this.renderSearch()
                    : null}
                <DropdownActionBar>
                    <DropdownAction type="button" onClick={this.selectAll}>
                        {selectAllText || t('form.multiPick.selectAllButton')}
                    </DropdownAction>
                    <DropdownAction type="button" onClick={this.selectNone}>
                        {selectNoneText || t('form.multiPick.selectNoneButton')}
                    </DropdownAction>
                </DropdownActionBar>
                <DropdownList>
                    {this.props.filteredOptions.map(this.renderItem)}
                </DropdownList>
            </Dropdown>
        );
    }
}
