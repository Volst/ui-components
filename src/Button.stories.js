import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
import IconAdd from './icon/AddCircle';
import IconDelete from './icon/Delete';
import IconMic from './icon/Mic';
import CenterDecorator from '../storybook/CenterDecorator';

storiesOf('Button', module)
    .addDecorator(CenterDecorator)
    .addWithInfo('standard', () => {
        return <Button>Save thingy</Button>;
    })
    .addWithInfo('full width', () => {
        return <Button fullWidth>Save thingy</Button>;
    })
    .addWithInfo('with icon and text', () => {
        return (
            <Button icon>
                <IconAdd /> Create user
            </Button>
        );
    })
    .addWithInfo('with icons', () => {
        return (
            <div>
                <Button icon unstyled>
                    <IconAdd />
                </Button>
                <Button icon unstyled>
                    <IconDelete />
                </Button>
                <Button icon unstyled>
                    <IconMic />
                </Button>
            </div>
        );
    });
