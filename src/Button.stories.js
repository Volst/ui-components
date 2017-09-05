import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button, Link, ExternalLink } from './Button';
import IconAdd from './icon/IconAddCircle';
import IconDelete from './icon/IconDelete';
import IconMic from './icon/IconMic';
import CenterDecorator from '../storybook/CenterDecorator';

storiesOf('Button', module)
    .addDecorator(CenterDecorator)
    .add(
        'standard',
        withInfo()(() => {
            return <Button>Save thingy</Button>;
        })
    )
    .add(
        'with tone',
        withInfo()(() => {
            return (
                <div>
                    <div>
                        <Button>Default</Button>
                        <Button disabled>Default disabled</Button>
                    </div>
                    <div>
                        <Button tone="success">Success</Button>
                        <Button tone="success" disabled>
                            Success disabled
                        </Button>
                    </div>
                    <div>
                        <Button tone="warning">Warning</Button>
                        <Button tone="warning" disabled>
                            Warning disabled
                        </Button>
                    </div>
                    <div>
                        <Button tone="dark">Dark</Button>
                        <Button tone="dark" disabled>
                            Dark disabled
                        </Button>
                    </div>
                    <div>
                        <Button tone="light">Light</Button>
                        <Button tone="light" disabled>
                            Light disabled
                        </Button>
                    </div>
                </div>
            );
        })
    )
    .add(
        'full width',
        withInfo()(() => {
            return <Button fullWidth>Save thingy</Button>;
        })
    )
    .add(
        'disabled',
        withInfo()(() => {
            return (
                <div>
                    <Button disabled>Save thingy</Button>
                    <Link to="/" disabled>
                        Disabled link
                    </Link>
                </div>
            );
        })
    )
    .add(
        'with icon and text',
        withInfo()(() => {
            return (
                <Button icon>
                    <IconAdd /> Create user
                </Button>
            );
        })
    )
    .add(
        'with icons',
        withInfo()(() => {
            return (
                <div>
                    <Button icon unstyled>
                        <IconAdd />
                    </Button>
                    <Link icon unstyled to="/">
                        <IconDelete />
                    </Link>
                    <Button icon unstyled>
                        <IconMic />
                    </Button>
                </div>
            );
        })
    )
    .add(
        'as React Router link',
        withInfo()(() => {
            return (
                <div>
                    <Link to="/">
                        <IconAdd /> Go to something
                    </Link>
                    <Link to="/" disabled>
                        <IconAdd /> Go to something
                    </Link>
                </div>
            );
        })
    )
    .add(
        'as external link',
        withInfo()(() => {
            return (
                <div>
                    <ExternalLink href="https://google.com">
                        <IconAdd /> Go to Google
                    </ExternalLink>
                    <ExternalLink href="https://google.com" disabled>
                        <IconAdd /> Go to Google
                    </ExternalLink>
                </div>
            );
        })
    );
