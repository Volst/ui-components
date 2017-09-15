import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TimeInput from './TimeInput';
import CenterDecorator from '../../storybook/CenterDecorator';
import moment from 'moment';

storiesOf('TimeInput', module)
    .addDecorator(CenterDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return (
                <TimeInput
                    onChange={action('change')}
                    name="myname"
                    value={moment()}
                />
            );
        })
    )
    .add(
        'without value',
        withInfo()(() => {
            return <TimeInput onChange={action('change')} name="myname" />;
        })
    )
    .add(
        'disabled',
        withInfo()(() => {
            return (
                <TimeInput onChange={action('change')} name="myname" disabled />
            );
        })
    );
