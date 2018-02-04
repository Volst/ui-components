import * as React from 'react';
import { styled } from '../styled-components';

const Container = styled.div`
  font-size: 12px;
  padding: 0 0 2px;
  opacity: 0.75;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.45;
`;

const StyledLabel = styled.label`
  text-transform: uppercase;
`;

interface LabelTextProps {
  helpText?: string;
  htmlFor?: string;
}

export default class LabelText extends React.PureComponent<LabelTextProps, {}> {
  render() {
    return (
      <Container>
        <StyledLabel htmlFor={this.props.htmlFor}>
          {this.props.children}
        </StyledLabel>
        <div>{this.props.helpText}</div>
      </Container>
    );
  }
}
