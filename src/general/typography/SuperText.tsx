import PropTypes from 'prop-types';
import styled from 'styled-components';

const SuperText = styled.h3`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  margin: 20px 0 7px 0;
  color: ${props => props.color};
`;
SuperText.displayName = 'SuperText';
SuperText.propTypes = {
  color: PropTypes.string,
};

export default SuperText;
