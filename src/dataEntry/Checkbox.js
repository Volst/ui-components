import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  width: 100%;
  display: block;
  margin-bottom: 3px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  word-break: break-word;
`;

const StyledInput = styled.input`
  margin-right: 5px;
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
    this.props.onChange(e.target.checked);
  };

  render() {
    return (
      <StyledLabel disabled={this.props.disabled}>
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
