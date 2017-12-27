import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const sweep = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  width: 18px;
  height: 18px;
  animation: ${sweep} 0.7s infinite linear;
  border-radius: 8px;
  margin: 5px;
  transition: 200ms all linear;

  ${props => {
    if (props.show) {
      return `
                box-shadow: 4px 0 0px -3px black;
                transition-duration: 1s;
            `;
    }
    return 'box-shadow: 10px 0 0px -10px black;';
  }};
`;

Loader.displayName = 'Loader';
Loader.propTypes = {
  show: PropTypes.bool,
};

export default Loader;
