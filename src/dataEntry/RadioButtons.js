import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ValuePropType, OptionsPropType } from '../PropTypes';
import styled from 'styled-components';
import { readableColor } from 'polished';
import { theme } from '../config';
import { uniqueId } from 'lodash';

const StyledDiv = styled.div`
    -webkit-touch-callout: none;
    user-select: none;
    display: flex;
    align-items: stretch;
    flex-direction: ${props => (props.vertical ? 'column' : 'row')};
    border: 1px solid transparent;
    border-radius: 4px;
    ${props =>
        props.focus &&
        `
        label {
            border-color: ${theme(props, 'primaryColor')};
        }
    `};
`;

const Option = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

    &:first-child > label {
        ${props =>
            props.vertical
                ? `
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                border-top-width: 1px;
            `
                : `
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            border-left-width: 1px;
        `};
    }

    &:last-child > label {
        ${props =>
            props.vertical
                ? `
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
            `
                : `
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
        `};
    }
`;

const StyledLabel = styled.label`
    flex: 1;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 5px;
    text-align: center;
    border: 1px solid ${props => theme(props, 'borderColor')};
    ${props =>
        props.vertical
            ? `
            border-top-width: 0;
            `
            : `
        border-left-width: 0;
    `};
    background: ${props => theme(props, 'componentBackground')};
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    white-space: nowrap;
`;

const StyledInput = styled.input`
    position: fixed;
    left: -999999px;
    opacity: 0;
    &:checked + label {
        background: ${props => theme(props, 'primaryColor')};
        border-color: ${props => theme(props, 'primaryColor')};
        color: ${props => readableColor(theme(props, 'primaryColor'))};
        box-shadow: ${props =>
            `${props.vertical ? '0px -1px' : '-1px 0'} ${theme(
                props,
                'primaryColor'
            )}`};
    }
`;

export default class RadioButtons extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func,
        name: PropTypes.string,
        disabled: PropTypes.bool,
        options: OptionsPropType,
        value: ValuePropType,
        vertical: PropTypes.bool,
    };

    state = {
        hasFocus: false,
    };

    handleChange = value => {
        if (!this.props.disabled) {
            this.props.onChange(this.props.name, value);
        }
    };

    renderItem = item => {
        const handleChange = () => this.handleChange(item.value);
        const id = `radiobuttons-${uniqueId()}`;

        return (
            <Option key={item.value} vertical={this.props.vertical}>
                <StyledInput
                    id={id}
                    tabIndex="0"
                    type="radio"
                    name={this.props.name}
                    checked={item.value === this.props.value}
                    onChange={handleChange}
                    disabled={this.props.disabled}
                    vertical={this.props.vertical}
                />
                <StyledLabel
                    htmlFor={id}
                    disabled={this.props.disabled}
                    vertical={this.props.vertical}
                >
                    {item.label}
                </StyledLabel>
            </Option>
        );
    };

    handleFocus = () => {
        this.setState({ hasFocus: true });
    };

    handleBlur = () => {
        this.setState({ hasFocus: false });
    };

    render() {
        return (
            <StyledDiv
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                focus={this.state.hasFocus}
                vertical={this.props.vertical}
            >
                {this.props.options.map(this.renderItem)}
            </StyledDiv>
        );
    }
}
