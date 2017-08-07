import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordion';
import CenterDecorator from '../storybook/CenterDecorator';

storiesOf('Accordion', module)
    .addDecorator(CenterDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return (
                <div>
                    <Accordion
                        title="Closed one"
                        opened={false}
                        onChange={action('open')}
                    >
                        Some hidden content.
                    </Accordion>
                    <Accordion
                        title="Opened one"
                        opened
                        onChange={action('open')}
                    >
                        Some visible content bla bla, just filling the line so
                        we can see it wraps properly.
                    </Accordion>
                </div>
            );
        })
    )
    .add(
        'with deletable items',
        withInfo()(() => {
            return (
                <div>
                    <Accordion
                        title="Closed one"
                        opened={false}
                        onChange={action('open')}
                        onDelete={action('deleted')}
                    >
                        Some hidden content.
                    </Accordion>
                    <Accordion
                        title="Opened one"
                        opened
                        onChange={action('open')}
                        onDelete={action('deleted')}
                    >
                        Some visible content bla bla, just filling the line so
                        we can see it wraps properly.
                    </Accordion>
                    <Accordion
                        title="Disabled deletable item"
                        opened={false}
                        onChange={action('open')}
                        onDelete={action('deleted')}
                        disabled
                    >
                        Bla bla
                    </Accordion>
                </div>
            );
        })
    );
