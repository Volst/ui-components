import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import AccessAlarm from './icon/IconAccessAlarm';
import Delete from './icon/IconDelete';
import CenterDecorator from '../../storybook/CenterDecorator';

storiesOf('Icon', module)
    .addDecorator(CenterDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return <AccessAlarm />;
        })
    )
    .add(
        'with color',
        withInfo()(() => {
            return <Delete color="red" />;
        })
    );
