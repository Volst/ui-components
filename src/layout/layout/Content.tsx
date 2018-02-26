import * as React from 'react';
import { styled } from '../../styled-components';
import { tint } from 'polished';
import { Scrollbars } from 'react-custom-scrollbars';

export type AvailableTones = 'primary';

interface StyledScrollbarsProps {
  tone?: AvailableTones;
}

const InnerScrollbars: React.SFC<StyledScrollbarsProps> = ({
  tone,
  ...props
}) => <Scrollbars {...props} />;

const StyledScrollbars = styled(InnerScrollbars)`
  flex: 1;
  background: ${props =>
    props.tone === 'primary'
      ? tint(0.07, props.theme.primaryColor)
      : props.theme.componentBackground};
`;

interface MainProps {
  blur?: boolean;
  center?: boolean;
  small?: boolean;
}

const Main = styled.main`
  margin: 0 auto;
  max-width: ${props => (props.small ? '400px' : '1500px')};
  padding: 25px;
  ${(props: MainProps) =>
    props.blur &&
    `
      filter: blur(2px) grayscale(40%);
      pointer-events: none;
      opacity: 0.6;
    `};
  transition: 200ms filter ease;

  ${props =>
    props.center
      ? `
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `
      : null};
`;

export interface ContentProps {
  center?: boolean;
  blur?: boolean;
  tone?: AvailableTones;
  small?: boolean;
}

const Content: React.SFC<ContentProps> = props => (
  <StyledScrollbars tone={props.tone}>
    <Main center={props.center} blur={props.blur} small>
      {props.children}
    </Main>
  </StyledScrollbars>
);

export default Content;
