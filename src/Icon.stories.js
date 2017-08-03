import React from 'react';
import { storiesOf } from '@storybook/react';
import AccessAlarm from './icon/IconAccessAlarm';
import Delete from './icon/IconDelete';
import CenterDecorator from '../storybook/CenterDecorator';

storiesOf('Icon', module)
    .addDecorator(CenterDecorator)
    .addWithInfo('standard', () => {
        return <AccessAlarm />;
    })
    .addWithInfo('with color', () => {
        return <Delete color="red" />;
    });
