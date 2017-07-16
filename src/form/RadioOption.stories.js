import React from 'react';
import { storiesOf, action } from '@storybook/react';
import RadioOption from './RadioOption';
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

storiesOf('RadioOption', module)
    .addDecorator(CenterDecorator)
    .addWithInfo('standard', () => {
        return (
            <RadioOption
                onChange={action('change')}
                name="myname"
                options={SOME_OPTIONS}
                value="zebra"
            />
        );
    })
    .add('disabled', () => {
        return (
            <RadioOption
                disabled
                onChange={action('change')}
                name="myname"
                options={SOME_OPTIONS}
                value="zebra"
            />
        );
    });
