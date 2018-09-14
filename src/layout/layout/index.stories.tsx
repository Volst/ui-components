import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FullDecorator from '../../../storybook/FullDecorator';
import Body from './Body';
import Content from './Content';
import ContentContainer from './ContentContainer';
import AppContainer from './AppContainer';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import TextInput from '../../dataEntry/TextInput';
import { Button } from '../../general/Button';
import ActionBar from '../ActionBar';

storiesOf('Layout / Layout', module)
  .addDecorator(FullDecorator)
  .add(
    'standard',
    withInfo()(() => (
      <AppContainer>
        <Body>
          <ContentContainer>
            <Content>Some content.</Content>
            <Sidebar>This is the sidebar.</Sidebar>
          </ContentContainer>
          <Toolbar>Toolbar.</Toolbar>
        </Body>
      </AppContainer>
    ))
  )
  .add(
    'small content',
    withInfo()(() => (
      <AppContainer>
        <Body>
          <ContentContainer>
            <Content size="small">
              <p>
                Some small content text inputs etc. should not look to wide when
                using the size prop set to 'small'.
              </p>
              <TextInput name="foo" value="" />
              <ActionBar>
                <Button>Save</Button>
              </ActionBar>
            </Content>
            <Sidebar>This is the sidebar.</Sidebar>
          </ContentContainer>
          <Toolbar>Toolbar.</Toolbar>
        </Body>
      </AppContainer>
    ))
  )
  .add(
    'full size content',
    withInfo()(() => (
      <AppContainer>
        <Body>
          <ContentContainer>
            <Content size="full">
              <p>
                Pages with big tables should use all space available, also on
                big screens. Setting the size-prop to 'full' will enable this by
                removing the max-width of this container.
              </p>
              <TextInput name="foo" value="" />
              <ActionBar>
                <Button>Save</Button>
              </ActionBar>
            </Content>
            <Sidebar>This is the sidebar.</Sidebar>
          </ContentContainer>
          <Toolbar>Toolbar.</Toolbar>
        </Body>
      </AppContainer>
    ))
  );
