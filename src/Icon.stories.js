import React from 'react';
import { storiesOf } from '@storybook/react';
import AccessAlarm from './icons/AccessAlarm';
import Delete from './icons/Delete';
import CenterDecorator from '../storybook/CenterDecorator';

storiesOf('Icon', module)
    .addDecorator(CenterDecorator)
    .addWithInfo('standard', () => {
        return <AccessAlarm />;
    })
    .addWithInfo('with color', () => {
        return <Delete color="red" />;
    });
