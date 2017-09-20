import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Downshift from 'downshift';
import styled from 'styled-components';
import { COLOR_TEXT } from '../ReCyCleTheme';
import { tint } from 'polished';
import { theme } from '../helpers';
import IconArrowDropDown from '../icon/IconArrowDropDown';
import IconArrowDropUp from '../icon/IconArrowDropUp';
import IconClose from '../icon/IconClose';
import { StyledInput } from './TextInput';
import { Button } from '../Button';

export const DropdownContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const Dropdown = styled.div`
    width: 100%;
    border: 1px solid ${props => theme(props, 'primary')};
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
    position: absolute;
    z-index: 1000;
`;

const DropdownToggle = styled.div`
    position: absolute;
    top: -1px;
    right: 0;
`;

export const DropdownItem = styled.div`
    background: ${props =>
        props.highlighted ? tint(0.2, theme(props, 'primary')) : 'white'};
    color: ${COLOR_TEXT};
    font-weight: ${props => (props.selected ? 'bold' : 'normal')};
    padding: 4px;
    cursor: default;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

// Poor man's filtering.
function fuzzySearch(options, inputValue) {
    return options.filter(o =>
        o.value.toLowerCase().includes(inputValue.toLowerCase())
    );
}

export default class FancySelect extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        name: PropTypes.string,
        value: PropTypes.string,
        options: PropTypes.array.isRequired,
        disabled: PropTypes.bool,
    };

    handleChange = option => {
        this.props.onChange(this.props.name, option.value);
    };

    handleClear = () => {
        this.props.onChange(null);
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
                            selected: selectedItem === item,
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
        ...rest
    }) => {
        const options = fuzzySearch(this.props.options, inputValue);
        const actuallyOpen = isOpen && options.length > 0;

        return (
            <DropdownContainer {...getRootProps({ refKey: 'innerRef' })}>
                <StyledInput
                    {...getInputProps()}
                    hasDropdown={actuallyOpen}
                    disabled={this.props.disabled}
                    onClick={openMenu}
                />
                <DropdownToggle>
                    {this.props.value != null && (
                        <Button unstyled icon onClick={this.handleClear}>
                            <IconClose width="16" height="16" />
                        </Button>
                    )}
                    <Button unstyled icon onClick={toggleMenu}>
                        {actuallyOpen ? (
                            <IconArrowDropUp />
                        ) : (
                            <IconArrowDropDown />
                        )}
                    </Button>
                </DropdownToggle>

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
        const value = this.props.value != null ? this.props.value : '';

        return (
            <Downshift
                selectedItem={value}
                onChange={this.handleChange}
                itemToString={this.itemToString}
            >
                {this.renderDownshift}
            </Downshift>
        );
    }
}
