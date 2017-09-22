import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Form from './Form';
import { Button } from '../general/Button';
import CenterDecorator from '../../storybook/CenterDecorator';

storiesOf('Data Entry / Form', module)
    .addDecorator(CenterDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return (
                <Form onSubmit={action('submit')}>
                    <Button type="submit">Submit</Button>
                </Form>
            );
        })
    );
