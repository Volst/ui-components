import PropTypes from 'prop-types';
import * as React from 'react';
import { styled } from '../styled-components';

const StyledForm = styled('form')`
  display: inherit;
  flex-grow: 1;
  flex-direction: inherit;
  width: 100%;
  height: 100%;
`;

export interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default class Form extends React.Component<FormProps, {}> {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  // Submit with ctrl+s or <cmd/windows>+s
  handleKeydown = e => {
    if (e.ctrlKey || e.metaKey) {
      switch (String.fromCharCode(e.which).toLowerCase()) {
        case 's':
          this.handleSubmit(e);
          break;
        default:
          break;
      }
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(e);
  };

  render() {
    return <StyledForm {...this.props} onSubmit={this.handleSubmit} />;
  }
}
