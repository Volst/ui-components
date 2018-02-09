import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Modal from './Modal';
import confirm from './confirm';
import CenterDecorator from '../../../storybook/CenterDecorator';
import { Button } from '../../general/Button';
import { State } from 'react-powerplug';

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
    return (
      <State initial={{ visible: false }}>
        {({ state, setState }) => (
          <div>
            <Button
              onClick={() => {
                setState({ visible: true });
              }}
            >
              Show modal
            </Button>
            <Modal
              visible={state.visible}
              onClose={() => {
                setState({ visible: false });
                action('close')();
              }}
              title="Nice Modal Title"
              footer={
                <React.Fragment>
                  <Button tone="light">Cancel</Button>
                  <Button>Save</Button>
                </React.Fragment>
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
        )}
      </State>
    );
  })
  .add(
    'confirm',
    withInfo()(() => {
      class MyComponent extends React.Component {
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
