import PropTypes from 'prop-types';
import styled from 'styled-components';

const Subheading = styled.h2`
  font-weight: normal;
  font-size: 20px;
  margin: ${props => (props.compact ? '0' : '20px 0 7px 0')};
  color: ${props => props.color || props.theme.primaryColor};
`;
Subheading.displayName = 'Subheading';
Subheading.propTypes = {
  color: PropTypes.string,
  compact: PropTypes.bool,
};

export default Subheading;
