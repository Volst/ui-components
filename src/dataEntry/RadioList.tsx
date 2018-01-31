import * as React from 'react';
import { styledTs, styled } from '../styled-components';
import { ValuePropType, OptionsPropType } from '../PropTypes';

const StyledDiv = styled.div``;

const StyledLabel = styledTs(styled.label)`
  width: 100%;
  margin-bottom: 3px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  word-break: break-word;
`;

const StyledInput = styled.input`
  margin-right: 5px;
  position: relative;
`;

interface RadioListProps {
  onChange?: (name: string, value: string) => void;
  name?: string;
  disabled?: boolean;
  options: OptionsPropType;
  value: ValuePropType;
}

export default class RadioList extends React.PureComponent<RadioListProps, {}> {
  renderItem = item => {
    const handleChange = () => this.props.onChange(this.props.name, item.value);
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
    return <StyledDiv>{this.props.options.map(this.renderItem)}</StyledDiv>;
  }
}
