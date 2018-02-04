import * as React from 'react';
import Dialog from 'rc-dialog';
import globalStyles from './globalStyles';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import { withTheme } from 'styled-components';
import { ThemeInterface } from 'src/config';

let globalInserted = false;
let mousePosition = null;
let mousePositionEventBinded = false;

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  afterClose?: () => void;
  width?: string;
  title?: string | React.ReactNode;
  footer?: React.ReactNode;
  theme: ThemeInterface;
}

class Modal extends React.Component<ModalProps, {}> {
  static propTypes = {};

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

export default withTheme(Modal);
