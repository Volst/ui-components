import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = styled.h1`
  font-weight: bold;
  font-size: 26px;
  margin: 20px 0 7px 0;
  color: ${props => props.color || props.theme.headingTextColor};
`;
Heading.displayName = 'Heading';
Heading.propTypes = {
  color: PropTypes.string,
};

export default Heading;
