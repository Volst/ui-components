import React from 'react';
import { storiesOf, action } from '@storybook/react';
import RadioButtons from './RadioButtons';
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

storiesOf('RadioButtons', module)
    .addDecorator(CenterDecorator)
    .addWithInfo('standard', () => {
        return (
            <RadioButtons
                onChange={action('change')}
                name="myname"
                options={SOME_OPTIONS}
                value="zebra"
            />
        );
    })
    .add('disabled', () => {
        return (
            <RadioButtons
                disabled
                onChange={action('change')}
                name="myname"
                options={SOME_OPTIONS}
                value="zebra"
            />
        );
    });
