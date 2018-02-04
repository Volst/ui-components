import { styled, keyframes } from '../styled-components';

const sweep = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Also used by <Button loading />
// TODO: I should use styled-components css`` method here, but for one weird reason
// that causes the animation to break, only in the Button component.
export const showLoaderCss = `
  width: 18px;
  height: 18px;
  animation: ${sweep} 0.7s infinite linear;
  border-radius: 8px;
  box-shadow: 4px 0 0 -3px black;
`;

interface LoaderProps {
  show?: boolean;
}

// Duplicated width+height to prevent jumping when loader is not shown.
const Loader = styled.div`
  width: 18px;
  height: 18px;
  margin: 5px;
  transition: 200ms all linear;
  ${(props: LoaderProps) => props.show && showLoaderCss};
`;

Loader.displayName = 'Loader';

export default Loader;
