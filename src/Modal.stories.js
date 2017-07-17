import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Modal from './Modal';

storiesOf('Modal', module).addWithInfo('standard', () => {
    return (
        <Modal onClose={action('close')}>
            <p>This is some modal content.</p>
        </Modal>
    );
});
