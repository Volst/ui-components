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
  disableSubmitOnEnter?: boolean;
}

export default class Form extends React.Component<FormProps, {}> {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleKeydown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    // Submit with ctrl+s or <cmd/windows>+s
    if (e.ctrlKey || e.metaKey) {
      switch (String.fromCharCode(e.which).toLowerCase()) {
        case 's':
          this.handleSubmit(e);
          break;
        default:
          break;
      }
    }

    if (this.props.disableSubmitOnEnter && e.keyCode === 13) {
      e.preventDefault();
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(e);
  };

  render() {
    return (
      <StyledForm
        {...this.props}
        onSubmit={this.handleSubmit}
        onKeyDown={this.handleKeydown}
      />
    );
  }
}
