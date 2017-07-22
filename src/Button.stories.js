import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import IconAdd from './icon/Add';
import CenterDecorator from '../storybook/CenterDecorator';

storiesOf('Button', module)
    .addDecorator(CenterDecorator)
    .addWithInfo('standard', () => {
        return <Button>Save thingy</Button>;
    })
    .addWithInfo('full width', () => {
        return <Button fullWidth>Save thingy</Button>;
    })
    .addWithInfo('with icon', () => {
        return (
            <Button>
                <IconAdd width="18" height="18" /> Create user
            </Button>
        );
    });
