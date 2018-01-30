import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${props => props.theme.lightColor};
  border: 1px solid ${props => props.theme.borderColor};
  padding: 5px;
`;

function ActionBar(props) {
  return <StyledDiv {...props} />;
}

ActionBar.propTypes = {
  children: PropTypes.node,
};

export default ActionBar;
