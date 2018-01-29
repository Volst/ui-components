import PropTypes from 'prop-types';
import * as React from 'react';
import styled from 'styled-components';

const Menu = styled.header`
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

export default class TopMenu extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return <Menu>{this.props.children}</Menu>;
  }
}
