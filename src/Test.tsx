import React, { SFC } from 'react';
import styled from 'react-emotion';

type ComponentProps = {
  className?: string;
  label: string;
};

const Component: SFC<ComponentProps> = ({ label, className }) => (
  <div className={className}>{label}</div>
);

type StyledComponentProps = {
  bgColor: string;
} & ComponentProps;
//  ^^^ You will need this

const StyledComponent = styled<StyledComponentProps, {}>(Component)`
  color: red;
  background: ${props => props.bgColor};
`;

const App = () => (
  <StyledComponent bgColor="red" label="Oh, needs to re-type label prop =(" />
);
