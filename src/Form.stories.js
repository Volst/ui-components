import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Form from './Form';
import { Button } from './Button';
import CenterDecorator from '../storybook/CenterDecorator';

storiesOf('Form', module)
    .addDecorator(CenterDecorator)
    .addWithInfo('standard', () => {
        return (
            <Form onSubmit={action('submit')}>
                <Button type="submit">Submit</Button>
            </Form>
        );
    });
