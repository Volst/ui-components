import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Modal from './Modal';
import { t } from 'i18next';
import { Button } from '../../general/Button';
import Subheading from '../../general/typography/Subheading';
import { Text } from '../../general/typography/Text';
import { defaultConfig, ThemeInterface } from '../../config';
import { ThemeProvider } from '../../styled-components';
import { getTheme } from '../../VolstTheme';
import { Tone } from '../../PropTypes';

export interface ConfirmSharedProps {
  onOk: () => void;
  afterClose?: () => void;
  title: string;
  content?: string;
  okText?: string;
  okTone?: Tone;
  cancelText?: string;
}

export interface ConfirmModalProps extends ConfirmSharedProps {
  visible: boolean;
  close: ({ triggerCancel: boolean }) => void;
}

export interface ConfirmFunctionProps extends ConfirmSharedProps {
  theme?: ThemeInterface;
  onCancel?: () => void;
}

// TODO: perhaps add a fancy "question" icon like ant.design does
const ConfirmModal: React.SFC<ConfirmModalProps> = ({
  visible,
  afterClose,
  onOk,
  close,
  title,
  content,
  cancelText,
  okText,
  okTone,
}) => {
  const handleCancel = () => close({ triggerCancel: true });
  const handleOk = () => {
    onOk();
    close({ triggerCancel: false });
  };
  return (
    <Modal
      visible={visible}
      afterClose={afterClose}
      onClose={handleCancel}
      width="416px"
      theme={defaultConfig}
      footer={
        <React.Fragment>
          <Button tone={Tone.Light} onClick={handleCancel}>
            {cancelText || t('form.cancelButton')}
          </Button>
          <Button tone={okTone} onClick={handleOk}>
            {okText || t('form.okButton')}
          </Button>
        </React.Fragment>
      }
    >
      <Subheading>{title}</Subheading>
      {content && <Text>{content}</Text>}
    </Modal>
  );
};

export default function confirm({
  theme = {},
  ...config
}: ConfirmFunctionProps) {
  let div = document.createElement('div');
  document.body.appendChild(div);

  function close(...args) {
    render({
      ...config,
      close,
      visible: false,
      afterClose: () => destroy(...args),
    });
  }
  function destroy(...args) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    const triggerCancel =
      args && args.length && args.some(param => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      config.onCancel();
    }
  }
  function render(props) {
    // Since we are rendering a separate DOM we also need to initialize the ThemeProvider again.
    // Unfortunately there is no way to get the `theme` object, so the user needs to manually pass it.
    ReactDOM.render(
      <ThemeProvider theme={getTheme(theme as any)}>
        <ConfirmModal {...props} />
      </ThemeProvider>,
      div
    );
  }
  render({ ...config, visible: true, close });
  return {
    destroy: close,
  };
}
