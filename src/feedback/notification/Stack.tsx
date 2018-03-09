import styled from '../../styled-components';
import * as React from 'react';
import Item from './Item';

export interface NotificationProps {
  key: string;
  message: string;
  onClick?: (notification: Notification, dismiss: () => void) => void;
  dismissAfter?: boolean | number;
  dismissible?: boolean;
  type?: string;
}

export interface NotificationStackProps {
  notifications: Notification[];
  onDismiss: (notification: Notification) => void;
}

export default class NotificationStack extends React.Component<
  NotificationStackProps,
  {}
> {
  renderNotification = notification => {
    const onDismiss = () => this.props.onDismiss(notification);
    return (
      <Item
        key={notification.key}
        type={notification.type}
        message={notification.message}
        dismissAfter={notification.dismissAfter}
        onDismiss={onDismiss}
        onClick={
          notification.onClick
            ? () => notification.onClick(notification, onDismiss)
            : undefined
        }
        dismissible={notification.dismissible}
      />
    );
  };

  render() {
    return (
      <StackWrapper>
        {this.props.notifications.map(this.renderNotification)}
      </StackWrapper>
    );
  }
}

const StackWrapper = styled.div`
  position: fixed;
  top: 20px;
  z-index: ${props => props.theme.zIndexNotificationStack};
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  pointer-events: none;
`;
