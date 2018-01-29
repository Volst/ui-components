import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Dialog from 'rc-dialog';
import globalStyles from './globalStyles';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import { withTheme } from 'styled-components';

let globalInserted = false;
let mousePosition = null;
let mousePositionEventBinded = false;

@withTheme
export default class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    afterClose: PropTypes.func,
    width: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    footer: PropTypes.element,
    theme: PropTypes.object.isRequired,
  };

  componentWillMount() {
    // Terrible hack, but I did not yet find a prop way to defer loading
    // the global styles for rc-dialog.
    if (!globalInserted) {
      globalStyles(this.props.theme);
      globalInserted = true;
    }
  }

  componentDidMount() {
    if (mousePositionEventBinded) {
      return;
    }
    // You might think: what the fuck is this code.
    // This is necessary to animate the modal starting from the current mouse position.
    // Respectfully copied from https://github.com/ant-design/ant-design/
    addEventListener(document.documentElement, 'click', e => {
      mousePosition = {
        x: e.pageX,
        y: e.pageY,
      };
      setTimeout(() => (mousePosition = null), 100);
    });
    mousePositionEventBinded = true;
  }

  render() {
    return (
      <Dialog
        visible={this.props.visible}
        animation="zoom"
        maskAnimation="fade"
        onClose={this.props.onClose}
        afterClose={this.props.afterClose}
        destroyOnClose
        closable={false}
        mousePosition={mousePosition}
        style={{ width: this.props.width }}
        title={this.props.title}
        footer={this.props.footer}
      >
        {this.props.children}
      </Dialog>
    );
  }
}
