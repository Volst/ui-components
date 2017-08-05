import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Modal from './Modal';

storiesOf('Modal', module).add(
    'standard',
    withInfo()(() => {
        return (
            <Modal onClose={action('close')}>
                <p>This is some modal content.</p>
            </Modal>
        );
    })
);
