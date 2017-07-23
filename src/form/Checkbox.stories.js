import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Checkbox from './Checkbox';
import CenterDecorator from '../../storybook/CenterDecorator';

storiesOf('Checkbox', module)
    .addDecorator(CenterDecorator)
    .addWithInfo('standard', () => {
        return (
            <form>
                <Checkbox
                    onChange={action('change')}
                    label="Zebra"
                    name="animals"
                    value={true}
                />
                <Checkbox
                    onChange={action('change')}
                    name="animals"
                    label="Lion"
                    value={false}
                />
            </form>
        );
    })
    .add('disabled', () => {
        return (
            <Checkbox
                disabled
                onChange={action('change')}
                name="animals"
                label="Zebra"
                value={true}
            />
        );
    });
