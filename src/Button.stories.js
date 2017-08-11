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
                <Link to="/">
                    <IconAdd /> Go to something
                </Link>
            );
        })
    )
    .add(
        'as external link',
        withInfo()(() => {
            return (
                <ExternalLink href="https://google.com">
                    <IconAdd /> Go to Google
                </ExternalLink>
            );
        })
    );
