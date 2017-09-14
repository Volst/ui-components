import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div``;

const StyledLabel = styled.label`
    width: 100%;
    display: block;
    margin-bottom: 3px;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const StyledInput = styled.input`
    margin-right: 5px;
    position: relative;
    top: -1px;
`;

@observer
export default class RadioList extends Component {
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

    renderItem = item => {
        const handleChange = () =>
            this.props.onChange(this.props.name, item.value);
        return (
            <StyledLabel key={item.value} disabled={this.props.disabled}>
                <StyledInput
                    type="radio"
                    onChange={handleChange}
                    checked={item.value === this.props.value}
                    disabled={this.props.disabled}
                />
                {item.label}
            </StyledLabel>
        );
    };

    render() {
        return (
            <StyledDiv>
                {this.props.options.map(this.renderItem)}
            </StyledDiv>
        );
    }
}