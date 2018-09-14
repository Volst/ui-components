import * as React from 'react';
import { styled } from '../../styled-components';
import { tint } from 'polished';
import Scrollbars from 'react-custom-scrollbars';

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
  size?: 'small' | 'medium' | 'full';
  compact?: boolean;
}

const Main = styled<MainProps, 'main'>('main')`
  margin: 0 auto;
  max-width: ${props => {
    switch (props.size) {
      case 'small':
        return '400px';
      case 'full':
        return 'none';
      default:
        return '1500px';
    }
  }};
  padding: ${props => (props.compact ? '0 25px' : '25px')};
  ${props =>
    (props.blur || '') &&
    `
      filter: blur(2px) grayscale(40%);
      pointer-events: none;
      opacity: 0.6;
    `};
  transition: 200ms filter ease;

  ${props =>
    (props.center || '') &&
    `
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `};
`;

export interface ContentProps extends MainProps {
  tone?: AvailableTones;
}

const Content: React.SFC<ContentProps> = props => (
  <StyledScrollbars tone={props.tone}>
    <Main
      center={props.center}
      blur={props.blur}
      size={props.size}
      compact={props.compact}
    >
      {props.children}
    </Main>
  </StyledScrollbars>
);

export default Content;
