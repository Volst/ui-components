import * as React from 'react';
import styled from '../styled-components';

const StyledDiv = styled('div')`
  margin: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${props => props.theme.lightColor};
  border: 1px solid ${props => props.theme.borderColor};
  padding: 5px;
`;

const ActionBar: React.SFC = props => {
  return <StyledDiv {...props} />;
};

export default ActionBar;
