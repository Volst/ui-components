import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    width: 100%;
    display: block;
    margin-bottom: 3px;
    cursor: pointer;
`;

const StyledInput = styled.input`
    margin-right: 5px;
    position: relative;
    top: -1px;
`;

export default class Checkbox extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        name: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.bool,
        disabled: PropTypes.bool,
    };

    handleChange = e => {
        this.props.onChange(this.props.name, e.target.checked);
    };

    render() {
        return (
            <StyledLabel>
                <StyledInput
                    type="checkbox"
                    onChange={this.handleChange}
                    checked={this.props.value}
                    disabled={this.props.disabled}
                />
                {this.props.label}
            </StyledLabel>
        );
    }
}
