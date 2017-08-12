import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CenterDecorator from '../storybook/CenterDecorator';
import Loader from './Loader';

storiesOf('Loader', module).addDecorator(CenterDecorator).add(
    'standard',
    withInfo()(() => {
        return <Loader show />;
    })
);
