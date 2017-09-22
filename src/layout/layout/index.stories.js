import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FullDecorator from '../../../storybook/FullDecorator';
import Body from './Body';
import Content from './Content';
import ContentContainer from './ContentContainer';
import AppContainer from './AppContainer';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';

storiesOf('Layout / Layout', module)
    .addDecorator(FullDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return (
                <AppContainer>
                    <Body>
                        <ContentContainer>
                            <Content>Some content.</Content>
                            <Sidebar>This is the sidebar.</Sidebar>
                        </ContentContainer>
                        <Toolbar>Toolbar.</Toolbar>
                    </Body>
                </AppContainer>
            );
        })
    );
