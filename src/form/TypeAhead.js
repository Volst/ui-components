import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Downshift from 'downshift';
import styled from 'styled-components';
import { COLOR_TEXT } from '../ReCyCleTheme';
import { tint } from 'polished';
import { theme } from '../helpers';

// TODO: we should use a separate TextInput component for this
const TextInput = styled.input`
    height: 30px;
    font-size: 14px;
    color: ${COLOR_TEXT};
    background: #fff;
    padding: 0 8px;
    text-decoration: none;
    border-radius: 4px;
    ${props =>
        props.hasDropdown
            ? `
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    `
            : ''};
    border: 1px solid #ccc;
    width: 100%;

    &:focus {
        outline: 0;
        border-color: ${props => theme(props, 'primary')};
    }
`;

const TypeAheadContainer = styled.div`
    position: relative;
    width: 100%;
`;

const Dropdown = styled.div`
    width: 100%;
    border: 1px solid ${props => theme(props, 'primary')};
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
    position: absolute;
    z-index: 1000;
`;

const DropdownItem = styled.div`
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

export default class TypeAhead extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        onSelect: PropTypes.func.isRequired,
        name: PropTypes.string,
        value: PropTypes.string,
        options: PropTypes.array.isRequired,
        disabled: PropTypes.bool,
    };

    handleSelect = option => {
        this.props.onSelect(option.value);
    };

    handleStateChange = changes => {
        if (changes.hasOwnProperty('inputValue')) {
            this.props.onChange(this.props.name, changes.inputValue);
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
                        <TypeAheadContainer
                            {...getRootProps({ refKey: 'innerRef' })}
                        >
                            <TextInput
                                {...getInputProps()}
                                hasDropdown={isOpen && hasOptions}
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
                        </TypeAheadContainer>
                    )}
                </Downshift>
            </div>
        );
    }
}
