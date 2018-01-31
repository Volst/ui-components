import * as React from 'react';
import { styledTs, styled } from '../../styled-components';
import { tint } from 'polished';
import { Scrollbars } from 'react-custom-scrollbars';

type AvailableTones = 'primary';

interface StyledScrollbarsProps {
  tone?: AvailableTones;
}

const StyledScrollbars = styledTs<StyledScrollbarsProps>(
  styled(({ tone, ...props }) => <Scrollbars {...props} />)
)`
  flex: 1;
  background: ${props =>
    props.tone === 'primary'
      ? tint(0.07, props.theme.primaryColor)
      : props.theme.componentBackground};
`;

interface MainProps {
  blur?: boolean;
  center?: boolean;
}

const Main = styledTs<MainProps>(styled.main)`
  margin: 0 auto;
  max-width: 1500px;
  padding: 25px;
  ${props =>
    props.blur
      ? `
        filter: blur(2px) grayscale(40%);
        pointer-events: none;
        opacity: 0.6;
    `
      : null};
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

interface ContentProps {
  center?: boolean;
  blur?: boolean;
  tone?: AvailableTones;
}

const Content: React.SFC<ContentProps> = props => (
  <StyledScrollbars tone={props.tone}>
    <Main center={props.center} blur={props.blur}>
      {props.children}
    </Main>
  </StyledScrollbars>
);

export default Content;
