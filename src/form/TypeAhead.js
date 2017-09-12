import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Downshift from 'downshift';
import styled from 'styled-components';
import { COLOR_TEXT } from '../ReCyCleTheme';
import { tint } from 'polished';

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
        border-color: ${props => props.theme.primary};
    }
`;

const TypeAheadContainer = styled.div`
    position: relative;
    width: 100%;
`;

const Dropdown = styled.div`
    width: 100%;
    border: 1px solid ${props => props.theme.primary};
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
    position: absolute;
`;

const DropdownItem = styled.div`
    background: ${props =>
        props.highlighted ? tint(0.2, props.theme.primary) : 'white'};
    color: ${COLOR_TEXT};
    font-weight: ${props => (props.selected ? 'bold' : 'normal')};
    padding: 4px;
    cursor: default;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

function fuzzySearch(item, query) {
    return item.toLowerCase().includes(query.toLowerCase());
}

export default class TypeAhead extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        onSelect: PropTypes.func.isRequired,
        name: PropTypes.string,
        value: PropTypes.string,
        options: PropTypes.array.isRequired,
        disabled: PropTypes.bool,
    };

    handleSelect = value => {
        this.props.onSelect(value);
    };

    handleStateChange = ({ inputValue }) => {
        this.props.onChange(this.props.name, inputValue || '');
    };

    renderDropdown = ({
        isOpen,
        getItemProps,
        inputValue,
        highlightedIndex,
        selectedItem,
    }) => {
        if (!isOpen) {
            return null;
        }
        const options = this.props.options.filter(
            i => !inputValue || fuzzySearch(i, inputValue)
        );
        if (options.length < 1) {
            return null;
        }
        return (
            <Dropdown>
                {options.map((item, index) =>
                    <DropdownItem
                        {...getItemProps({
                            key: item,
                            index,
                            item,
                            highlighted: highlightedIndex === index,
                            selected: selectedItem === item,
                        })}
                    >
                        {item}
                    </DropdownItem>
                )}
            </Dropdown>
        );
    };

    render() {
        const value = this.props.value !== null ? this.props.value : '';

        return (
            <div>
                <Downshift
                    onStateChange={this.handleStateChange}
                    selectedItem={value}
                    onChange={this.handleSelect}
                >
                    {({
                        getRootProps,
                        getInputProps,
                        getItemProps,
                        isOpen,
                        inputValue,
                        highlightedIndex,
                        selectedItem,
                    }) =>
                        <TypeAheadContainer
                            {...getRootProps({ refKey: 'innerRef' })}
                        >
                            <TextInput
                                {...getInputProps()}
                                hasDropdown={isOpen}
                                disabled={this.props.disabled}
                            />
                            {this.renderDropdown({
                                isOpen,
                                getItemProps,
                                inputValue,
                                highlightedIndex,
                                selectedItem,
                            })}
                        </TypeAheadContainer>}
                </Downshift>
            </div>
        );
    }
}
