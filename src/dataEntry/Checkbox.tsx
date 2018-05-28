import * as React from 'react';
import { styled } from '../styled-components';

interface StyledLabelProps {
  disabled: boolean;
}

const StyledLabel = styled<StyledLabelProps, 'label'>('label')`
  width: 100%;
  display: block;
  margin-bottom: 3px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  word-break: break-word;
`;

const StyledInput = styled('input')`
  margin-right: 5px;
`;

export interface CheckboxProps {
  onChange: (name: string, value: boolean) => void;
  name: string;
  label?: string;
  value?: boolean;
  disabled?: boolean;
}

export default class Checkbox extends React.PureComponent<CheckboxProps, {}> {
  handleChange = e => {
    this.props.onChange(this.props.name, e.target.checked);
  };

  render() {
    return (
      <StyledLabel disabled={this.props.disabled || false}>
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
