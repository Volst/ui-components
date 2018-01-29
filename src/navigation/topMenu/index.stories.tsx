import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Route } from 'react-router-dom';
import FullDecorator from '../../../storybook/FullDecorator';
import Logo from './Logo';
import MenuRow from './MenuRow';
import NavItem from './NavItem';
import NavItemExternal from './NavItemExternal';
import NavMenu from './NavMenu';
import TopMenu from './TopMenu';
import Body from '../../layout/layout/Body';
import ContentContainer from '../../layout/layout/ContentContainer';
import Content from '../../layout/layout/Content';
import AppContainer from '../../layout/layout/AppContainer';
import Center from '../../general/typography/Center';
import { Text } from '../../general/typography/Text';

storiesOf('Navigation / TopMenu', module)
  .addDecorator(FullDecorator)
  .add(
    'two levels',
    withInfo()(() => {
      return (
        <TopMenu>
          <MenuRow>
            <Logo>TMS</Logo>
            <NavMenu>
              <NavItem
                title="Orders"
                to="/orders/planning"
                activePath="/orders"
              />
              <NavItem title="Settings" to="/settings" />
            </NavMenu>
            <NavItem
              title={
                <Center>
                  <Text compact>Name</Text>
                  <Text small compact>
                    Company
                  </Text>
                </Center>
              }
              to="/account"
            />
          </MenuRow>
          <MenuRow>
            <Route
              path="/orders"
              render={() => [
                <NavItem
                  key="planning"
                  title="Planning"
                  to="/orders/planning"
                />,
                <NavItem
                  key="invoices"
                  title="Invoices"
                  to="/orders/invoices"
                />,
              ]}
            />
          </MenuRow>
        </TopMenu>
      );
    })
  )
  .add(
    'three levels',
    withInfo()(() => {
      return (
        <AppContainer>
          <TopMenu>
            <MenuRow>
              <Logo>TMS</Logo>
              <NavMenu>
                <NavItem
                  title="Orders"
                  to="/orders/planning"
                  activePath="/orders"
                />
              </NavMenu>
            </MenuRow>
            <MenuRow>
              <NavItem
                title="Invoices"
                to="/orders/invoices/due"
                activePath="/orders/invoices"
              />
            </MenuRow>
          </TopMenu>
          <Body>
            <ContentContainer>
              <Content>
                <MenuRow inContent>
                  <NavItem title="Due" to="/orders/invoices/due" />
                  <NavItem title="Past" to="/orders/invoices/past" />
                </MenuRow>
              </Content>
            </ContentContainer>
          </Body>
        </AppContainer>
      );
    })
  )
  .add(
    'with external link',
    withInfo()(() => {
      return (
        <TopMenu>
          <MenuRow>
            <Logo>TMS</Logo>
            <NavMenu>
              <NavItem
                title="Orders"
                to="/orders/planning"
                activePath="/orders"
              />
              <NavItem title="Settings" to="/settings" />
              <NavItemExternal title="External" href="/external" />
            </NavMenu>
            <NavItem title="Account" to="/account" />
          </MenuRow>
          <MenuRow>
            <Route
              path="/orders"
              render={() => [
                <NavItem
                  key="planning"
                  title="Planning"
                  to="/orders/planning"
                />,
                <NavItem
                  key="invoices"
                  title="Invoices"
                  to="/orders/invoices"
                />,
              ]}
            />
          </MenuRow>
        </TopMenu>
      );
    })
  );
