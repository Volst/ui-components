import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import React, { Component } from 'react';
import styled from 'styled-components';

// TODO: Make this dynamic somewhere
const COLOR_PRIMARY = '#006b94';

const StyledDiv = styled.div`
    display: flex;
    align-items: stretch;
    border: 1px solid transparent;
    border-radius: 4px;
    ${props =>
        props.focus &&
        `
        border-color: ${COLOR_PRIMARY};
    `};
`;

const Option = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;

    &:first-child > label {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-left-width: 1px;
    }

    &:last-child > label {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
`;

const StyledLabel = styled.label`
    flex: 1;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    text-align: center;
    border: 1px solid #ccc;
    border-left-width: 0;
    background: #fff;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
`;

const StyledInput = styled.input`
    position: fixed;
    left: -999999px;
    opacity: 0;
    &:checked + label {
        background: ${COLOR_PRIMARY};
        border-color: ${COLOR_PRIMARY};
        color: #fff;
        box-shadow: -1px 0 ${COLOR_PRIMARY};
    }
`;

export default observer(
    class RadioOption extends Component {
        static propTypes = {
            onChange: PropTypes.func,
            name: PropTypes.string,
            disabled: PropTypes.bool,
            options: PropTypes.array.isRequired,
            value: PropTypes.oneOfType([
                PropTypes.bool,
                PropTypes.string,
                PropTypes.number,
            ]),
        };

        @observable hasFocus = false;

        handleChange = value => {
            if (!this.props.disabled) {
                this.props.onChange(this.props.name, value);
            }
        };

        renderItem = item => {
            const handleChange = () => this.handleChange(item.value);
            return (
                <Option key={item.value}>
                    <StyledInput
                        tabIndex="0"
                        type="radio"
                        name={this.props.name}
                        checked={item.value === this.props.value}
                        onChange={handleChange}
                        disabled={this.props.disabled}
                    />
                    <StyledLabel
                        onClick={handleChange}
                        disabled={this.props.disabled}
                    >
                        {item.label}
                    </StyledLabel>
                </Option>
            );
        };

        handleFocus = () => {
            this.hasFocus = true;
        };

        handleBlur = () => {
            this.hasFocus = false;
        };

        render() {
            return (
                <StyledDiv
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    focus={this.hasFocus}
                >
                    {this.props.options.map(this.renderItem)}
                </StyledDiv>
            );
        }
    }
);
