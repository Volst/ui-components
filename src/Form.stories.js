import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Form from './Form';
import { Button } from './Button';
import CenterDecorator from '../storybook/CenterDecorator';

storiesOf('Form', module).addDecorator(CenterDecorator).add(
    'standard',
    withInfo()(() => {
        return (
            <Form onSubmit={action('submit')}>
                <Button type="submit">Submit</Button>
            </Form>
        );
    })
);
