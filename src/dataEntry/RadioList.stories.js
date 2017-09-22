import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import RadioList from './RadioList';
import CenterDecorator from '../../storybook/CenterDecorator';

const SOME_OPTIONS = [
    {
        value: 'zebra',
        label: 'Zebra',
    },
    {
        value: 'lion',
        label: 'Lion',
    },
];

storiesOf('Data Entry / RadioList', module)
    .addDecorator(CenterDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return (
                <RadioList
                    onChange={action('change')}
                    name="myname"
                    options={SOME_OPTIONS}
                    value="zebra"
                />
            );
        })
    )
    .add(
        'disabled',
        withInfo()(() => {
            return (
                <RadioList
                    disabled
                    onChange={action('change')}
                    name="myname"
                    options={SOME_OPTIONS}
                    value="zebra"
                />
            );
        })
    );
