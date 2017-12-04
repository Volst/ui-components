import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import SingleDatePicker from './SingleDatePicker';
import CenterDecorator from '../../storybook/CenterDecorator';
import moment from 'moment';

storiesOf('Data Entry / SingleDatePicker', module)
    .addDecorator(CenterDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return (
                <SingleDatePicker
                    onChange={action('change')}
                    name="myname"
                    value={moment()}
                />
            );
        })
    )
    .add('controlled', () => {
        class MyComponent extends Component {
            state = {
                value: moment(),
            };

            handleChange = (name, value) => {
                this.setState({
                    value: value,
                });
                action('change')(name, value);
            };

            render() {
                return (
                    <SingleDatePicker
                        onChange={this.handleChange}
                        name="myname"
                        value={this.state.value}
                    />
                );
            }
        }
        return <MyComponent />;
    })
    .add(
        'with error',
        withInfo()(() => {
            return (
                <SingleDatePicker
                    hasError
                    onChange={action('change')}
                    name="myname"
                    value={moment()}
                />
            );
        })
    )
    .add(
        'disabled',
        withInfo()(() => {
            return (
                <SingleDatePicker
                    disabled
                    onChange={action('change')}
                    name="myname"
                    value={moment()}
                />
            );
        })
    );
