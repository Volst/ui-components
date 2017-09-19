import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import FancySelect from './FancySelect';
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
    {
        value: 'lioness',
        label: 'Lioness',
    },
    {
        value: 'elephant',
        label: 'Elephant',
    },
];

storiesOf('FancySelect', module)
    .addDecorator(CenterDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return (
                <div>
                    <FancySelect
                        onChange={action('change')}
                        name="myname"
                        options={SOME_OPTIONS}
                    />
                    <p>This text should be overlapped with the dropdown.</p>
                </div>
            );
        })
    )
    .add(
        'disabled',
        withInfo()(() => {
            return (
                <FancySelect
                    onChange={action('change')}
                    name="myname"
                    options={SOME_OPTIONS}
                    disabled
                />
            );
        })
    );
