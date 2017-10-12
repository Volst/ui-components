import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TypeAhead from './TypeAhead';
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

storiesOf('Data Entry / TypeAhead', module)
    .addDecorator(CenterDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return (
                <div>
                    <TypeAhead
                        onChange={action('change')}
                        onSelect={action('select')}
                        name="myname"
                        options={SOME_OPTIONS}
                    />
                    <p>This text should be overlapped with the dropdown.</p>
                </div>
            );
        })
    )
    .add(
        'with error',
        withInfo()(() => {
            return (
                <TypeAhead
                    onChange={action('change')}
                    onSelect={action('select')}
                    name="myname"
                    options={SOME_OPTIONS}
                    hasError
                />
            );
        })
    )
    .add(
        'disabled',
        withInfo()(() => {
            return (
                <TypeAhead
                    onChange={action('change')}
                    onSelect={action('select')}
                    name="myname"
                    options={SOME_OPTIONS}
                    disabled
                />
            );
        })
    );
