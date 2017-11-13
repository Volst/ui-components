import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
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
    padding: 4px 8px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 4px;
    outline: 0;

    ${props =>
        props.hasError &&
        `
        border-color: ${props.theme.dangerColor};
        background: ${
            props.focused ? props.theme.componentBackground : '#fef2f2'
        };
        `} ${props =>
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
    background: ${props => props.theme.primaryColor};
    color: ${props => readableColor(props.theme.primaryColor)};
    margin-right: 4px;
`;

const Input = styled(AutosizeInput)`
    input {
        border: none;
        outline: none;
        cursor: inherit;
        background-color: transparent;
        font-size: inherit;
    }
`;

// TODO: I got lazy
const CloseButton = styled.span`
    cursor: pointer;
`;

export default class MultiSelect extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        name: PropTypes.string,
        value: PropTypes.arrayOf(ValuePropType).isRequired,
        options: OptionsPropType,
        disabled: PropTypes.bool,
        hasError: PropTypes.bool,
    };

    state = { inputValue: '', focused: false };

    handleItemAdd = option => {
        this.setState({ inputValue: '' });
        if (this.props.value.indexOf(option.value) === -1) {
            this.props.onChange(this.props.name, [
                ...this.props.value,
                option.value,
            ]);
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
                            selected: selectedItem.includes(item),
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
        const actuallyOpen = isOpen && options.length > 0;

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
                        !this.props.disabled &&
                        (openMenu() || this.handleWrapperClick(e))
                    }
                    innerRef={c => (this._inputWrapper = c)}
                    tabIndex="-1"
                    hasDropdown={actuallyOpen}
                    focused={this.state.focused}
                    onFocus={() =>
                        !this.props.disabled && this.setState({ focused: true })
                    }
                    onBlur={() => this.setState({ focused: false })}
                    hasError={this.props.hasError}
                >
                    {selectedItem.map(item => (
                        <TagValue key={item.value}>
                            {item.label}{' '}
                            {!this.props.disabled && (
                                <CloseButton
                                    onClick={() => this.handleItemRemove(item)}
                                >
                                    ×
                                </CloseButton>
                            )}
                        </TagValue>
                    ))}
                    <Input {...inputProps} />
                    <DropdownToggle>
                        <Button icon onClick={toggleMenu} tabIndex={-1}>
                            {actuallyOpen ? (
                                <IconArrowDropUp />
                            ) : (
                                <IconArrowDropDown />
                            )}
                        </Button>
                    </DropdownToggle>
                </InputValueWrapper>
                {actuallyOpen &&
                    this.renderDropdown({
                        getItemProps,
                        inputValue,
                        highlightedIndex,
                        selectedItem,
                        options,
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
