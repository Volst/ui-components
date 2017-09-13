import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TextInput from './TextInput';
import CenterDecorator from '../../storybook/CenterDecorator';

storiesOf('TextInput', module)
    .addDecorator(CenterDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return (
                <div>
                    <TextInput onChange={action('change')} name="myname" />
                </div>
            );
        })
    )
    .add(
        'disabled',
        withInfo()(() => {
            return (
                <TextInput onChange={action('change')} name="myname" disabled />
            );
        })
    );
