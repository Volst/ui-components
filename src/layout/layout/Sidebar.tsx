import * as React from 'react';
import { styled, ThemeProps } from '../../styled-components';
import { Scrollbars } from 'react-custom-scrollbars';

interface StyledAsideProps extends ThemeProps {
  medium?: boolean;
}

const StyledAside = styled.aside`
  ${(props: StyledAsideProps) => {
    const width = props.medium ? 450 : 350;
    return `
      width: ${width}px;
      background: ${props.theme!.lightColor};

      &.slide-right-enter,
      &.slide-right-leave.slide-right-leave-active {
        margin-right: -${width}px;
      }
      &.slide-left-enter,
      &.slide-left-leave.slide-left-leave-active {
        margin-left: -${width}px;
      }
      &.slide-right-leave,
      &.slide-right-enter.slide-right-enter-active,
      &.slide-left-leave,
      &.slide-left-enter.slide-left-enter-active {
        margin-right: 0;
      }
      &.slide-right-enter-active,
      &.slide-right-leave-active,
      &.slide-left-enter-active,
      &.slide-left-leave-active {
        transition: margin 300ms ease;
      }
    `;
  }};
`;

const Content = styled.div`
  padding: 25px;
`;

export interface SidebarProps {
  medium?: boolean;
}

const Sidebar: React.SFC<SidebarProps> = ({ children, medium }) => (
  <StyledAside medium={medium}>
    <Scrollbars>
      <Content>{children}</Content>
    </Scrollbars>
  </StyledAside>
);

export default Sidebar;
