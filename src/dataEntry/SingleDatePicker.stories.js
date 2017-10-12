import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import SingleDatePicker from './SingleDatePicker';
import CenterDecorator from '../../storybook/CenterDecorator';
import moment from 'moment';

storiesOf('Data Entry / SingleDatePicker', module)
    .addDecorator(CenterDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return (
                <SingleDatePicker
                    onChange={action('change')}
                    name="myname"
                    value={moment()}
                />
            );
        })
    )
    .add(
        'with error',
        withInfo()(() => {
            return (
                <SingleDatePicker
                    hasError
                    onChange={action('change')}
                    name="myname"
                    value={moment()}
                />
            );
        })
    )
    .add(
        'disabled',
        withInfo()(() => {
            return (
                <SingleDatePicker
                    disabled
                    onChange={action('change')}
                    name="myname"
                    value={moment()}
                />
            );
        })
    );
