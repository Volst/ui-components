import { styledTs, styled } from '../../styled-components';
import * as React from 'react';
import { Button } from '../../general/Button';
import IconClose from '../../general/icon/IconClose';
import { readableColor } from '../../config';

const TRANSITION_TIME = 500;

export type TYPE = 'info' | 'error';

export interface NotificationItemProps {
  key: string;
  message: string;
  onDismiss: () => void;
  onClick?: () => void;
  dismissAfter?: boolean | number;
  dismissible?: boolean;
  type?: TYPE;
}

export default class NotificationItem extends React.Component<
  NotificationItemProps,
  { active: boolean }
> {
  static defaultProps = {
    dismissAfter: 3100,
    type: 'info',
  };

  state = {
    active: false,
  };

  private animateInTimeout;
  private expireTimeout;
  private transitionTimeout;

  componentDidMount() {
    this.animateInTimeout = setTimeout(this.animateIn.bind(this));

    if (this.props.dismissAfter !== false) {
      this.expireTimeout = setTimeout(
        this.expire.bind(this),
        this.props.dismissAfter
      );
    }
  }

  componentWillUnmount() {
    if (this.animateInTimeout) clearTimeout(this.animateInTimeout);
    if (this.expireTimeout) clearTimeout(this.expireTimeout);
    if (this.transitionTimeout) clearTimeout(this.transitionTimeout);
  }

  onDismiss = () => {
    this.props.onDismiss();
  };

  animateIn() {
    this.setState({ active: true });
  }

  forceDismiss = e => {
    if (e) e.preventDefault();
    this.expire();
  };

  expire() {
    this.setState({ active: false });
    this.transitionTimeout = setTimeout(this.onDismiss, TRANSITION_TIME);
  }

  render() {
    return (
      <StyledItem
        active={this.state.active}
        type={this.props.type}
        onClick={this.props.onClick}
      >
        {this.props.message}
        {this.props.dismissible !== false && (
          <CloseButton ghost small onClick={this.onDismiss}>
            <IconClose />
          </CloseButton>
        )}
      </StyledItem>
    );
  }
}

const CloseButton = styled(Button)`
  margin-left: 11px;
  position: absolute;
  top: 3px;
  right: 2px;
  font-size: 15px;
`;

interface StyledItemProps {
  active: boolean;
  type: TYPE;
}

function getBackgroundColor(props: StyledItemProps) {
  switch (props.type) {
    case 'info':
      return '#fbf2c4';
    case 'error':
      return '#f1a1a8';
    default:
      break;
  }
}

const StyledItem = styledTs<StyledItemProps>(styled.div)`
  width: 250px;
  padding: 10px 40px 10px 14px;
  color: ${props => readableColor(getBackgroundColor(props))};
  margin-bottom: 15px;
  border-radius: 4px;
  position: relative;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: 10px 10px;
  pointer-events: all;
  transition: ${TRANSITION_TIME}ms cubic-bezier(0.89, 0.01, 0.5, 1.1);
  word-wrap: break-word;
  ${props =>
    !props.active &&
    `
      visibility: hidden;
      opacity: 0;
    `};
  background: ${getBackgroundColor};
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
`;
