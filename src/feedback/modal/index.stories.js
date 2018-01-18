import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Modal from './Modal';
import confirm from './confirm';
import CenterDecorator from '../../../storybook/CenterDecorator';
import { Button } from '../../general/Button';
import { withTheme } from 'styled-components';

storiesOf('Feedback / Modal', module)
  .addDecorator(CenterDecorator)
  .add(
    'standard',
    withInfo()(() => {
      return (
        <Modal visible onClose={action('close')} title="This is a heading">
          <p>And some modal content</p>
        </Modal>
      );
    })
  )
  .add('controlled', () => {
    class MyComponent extends Component {
      state = { visible: false };
      handleOpen = () => {
        this.setState({ visible: true });
      };
      handleClose = () => {
        this.setState({ visible: false });
        action('close')();
      };
      render() {
        return (
          <div>
            <Button onClick={this.handleOpen}>Show modal</Button>
            <Modal
              visible={this.state.visible}
              onClose={this.handleClose}
              title="Nice Modal Title"
              footer={
                <Fragment>
                  <Button tone="light">Cancel</Button>
                  <Button>Save</Button>
                </Fragment>
              }
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                finibus porta massa, vitae auctor quam. Donec faucibus orci at
                quam euismod mollis. Maecenas eget blandit velit. Nam rutrum
                magna nibh, et ornare felis congue ac. Integer ut elit lacus.
                Etiam non metus ut risus sollicitudin consequat vel eget tellus.
                Integer lacus leo, facilisis in hendrerit eget, venenatis sed
                augue. Vestibulum pretium augue sed justo aliquet commodo. Nunc
                tincidunt semper volutpat. Integer finibus, elit nec bibendum
                aliquam, nulla tellus volutpat magna, quis elementum velit lorem
                id risus. Phasellus ac ullamcorper odio. Ut et molestie mauris.
                Aenean sollicitudin ultrices imperdiet. Aenean quis ex rutrum,
                cursus lectus eget, rutrum arcu. Nam eget ex vel neque luctus
                iaculis.
              </p>
            </Modal>
          </div>
        );
      }
    }
    return <MyComponent />;
  })
  .add(
    'confirm',
    withInfo()(() => {
      @withTheme
      class MyComponent extends Component {
        render() {
          return (
            <Button
              onClick={() =>
                confirm({
                  title: 'Do you really want to delete this fine item?',
                  onOk: action('ok'),
                  onCancel: action('cancel'),
                  okText: 'Delete me',
                  okTone: 'danger',
                  cancelText: 'Erhm no',
                })
              }
            >
              Show confirm dialog
            </Button>
          );
        }
      }
      return <MyComponent />;
    })
  );
