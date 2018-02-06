import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = styled.h1`
  font-weight: bold;
  font-size: 26px;
  margin: ${props => (props.compact ? '0' : '20px 0')};
  color: ${props => props.color || props.theme.headingTextColor};
`;
Heading.displayName = 'Heading';
Heading.propTypes = {
  color: PropTypes.string,
  compact: PropTypes.bool,
};

export default Heading;
