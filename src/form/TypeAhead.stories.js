import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import TypeAhead from './TypeAhead';
import CenterDecorator from '../../storybook/CenterDecorator';

const SOME_OPTIONS = ['Lion', 'Lioness', 'Zebra', 'Elephant'];

storiesOf('TypeAhead', module)
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
