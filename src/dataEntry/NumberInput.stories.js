import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import NumberInput from './NumberInput';
import CenterDecorator from '../../storybook/CenterDecorator';

storiesOf('NumberInput', module)
    .addDecorator(CenterDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return <NumberInput onChange={action('change')} name="dollars" />;
        })
    )
    .add(
        'euros',
        withInfo()(() => {
            return (
                <NumberInput
                    onChange={action('change')}
                    name="euros"
                    prefix="€"
                    includeThousandsSeparator
                    thousandsSeparatorSymbol="."
                    decimalSymbol=","
                    allowDecimal
                />
            );
        })
    )
    .add(
        'percentage',
        withInfo()(() => {
            return (
                <NumberInput
                    onChange={action('change')}
                    name="percentage"
                    suffix="%"
                    allowNegative
                />
            );
        })
    )
    .add(
        'disabled',
        withInfo()(() => {
            return (
                <NumberInput
                    onChange={action('change')}
                    name="dollars"
                    disabled
                />
            );
        })
    );
