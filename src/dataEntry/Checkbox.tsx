import * as React from 'react';
import { styled, styledTs } from '../styled-components';

interface StyledLabelProps {
  disabled: boolean;
}

const StyledLabel = styledTs<StyledLabelProps>(styled.label)`
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

interface Props {
  onChange: (name: string, value: boolean) => void;
  name?: string;
  label?: string;
  value?: boolean;
  disabled?: boolean;
}

export default class Checkbox extends React.PureComponent<Props, {}> {
  handleChange = e => {
    this.props.onChange(this.props.name, e.target.checked);
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
