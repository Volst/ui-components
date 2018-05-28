import * as React from 'react';
import {
  styled,
  keyframes,
  StyledComponent,
  ThemeInterface,
} from '../styled-components';

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

export interface StyledLoaderProps {
  show: boolean;
}

// Duplicated width+height to prevent jumping when loader is not shown.
const StyledLoader = styled<StyledLoaderProps, 'div'>('div')`
  width: 18px;
  height: 18px;
  margin: 5px;
  transition: box-shadow 200ms linear;
  ${props => (props.show || '') && showLoaderCss};
`;

export interface LoaderProps {
  show: boolean;
  delay?: number | boolean;
}

export default class Loader extends React.Component<
  LoaderProps,
  { pastDelay: boolean }
> {
  state = { pastDelay: false };
  private loadTimeout;

  componentDidMount() {
    this.updateDelayTiming();
  }

  componentDidUpdate() {
    this.updateDelayTiming();
  }

  updateDelayTiming() {
    const { show, delay } = this.props;
    if (!this.props.delay) {
      return;
    }
    if (show) {
      if (!this.loadTimeout) {
        // We only want to show the loading component if it takes too long
        this.loadTimeout = setTimeout(() => {
          this.setState({ pastDelay: true });
          this.loadTimeout = null;
        }, delay === true ? 300 : delay);
      }
    } else {
      if (this.state.pastDelay) {
        this.setState({ pastDelay: false });
      }
      this.clearTimeout();
    }
  }

  componentWillUnmount() {
    this.clearTimeout();
  }
  clearTimeout() {
    clearTimeout(this.loadTimeout);
    this.loadTimeout = null;
  }
  render() {
    const { show, delay } = this.props;
    return <StyledLoader show={delay ? this.state.pastDelay : show} />;
  }
}
