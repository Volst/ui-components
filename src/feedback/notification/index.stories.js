import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FullDecorator from '../../../storybook/FullDecorator';
import NotificationStack from './Stack';
import { action } from '@storybook/addon-actions';

const notifications = [
    {
        key: 'foo-bar',
        message: 'Foo bar',
        dismissAfter: false,
    },
    {
        key: 'super-long',
        message: 'Super long notification that should be wrapping oh yeahhhh',
        dismissAfter: 8000,
    },
    {
        key: 'spare-me',
        message: 'Spare me!',
        type: 'error',
        dismissAfter: 5000,
    },
];

storiesOf('Notification', module)
    .addDecorator(FullDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return (
                <NotificationStack
                    notifications={notifications}
                    onDismiss={action('dismiss')}
                />
            );
        })
    )
    .add('auto-disappear', () => {
        class MyComponent extends Component {
            state = {
                notifications,
            };

            handleDismiss = notification => {
                const newNotifications = this.state.notifications.slice();
                newNotifications.splice(
                    newNotifications.indexOf(notification),
                    1
                );
                this.setState({
                    notifications: newNotifications,
                });
                action('dismiss');
            };

            render() {
                return (
                    <NotificationStack
                        notifications={this.state.notifications}
                        onDismiss={this.handleDismiss}
                    />
                );
            }
        }

        return <MyComponent />;
    });
