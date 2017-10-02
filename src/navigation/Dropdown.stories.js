import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Button } from '../general/Button';
import { Dropdown, DropdownMenu, DropdownItem } from './Dropdown';
import IconArrowDropDown from '../general/icon/IconArrowDropDown';
import CenterDecorator from '../../storybook/CenterDecorator';

storiesOf('Navigation / Dropdown', module)
    .addDecorator(CenterDecorator)
    .add(
        'standard',
        withInfo()(() => {
            const menu = (
                <DropdownMenu>
                    <DropdownItem onClick={action('click')}>Lions</DropdownItem>
                    <DropdownItem onClick={action('click')}>
                        Elephants
                    </DropdownItem>
                    <DropdownItem onClick={action('click')}>
                        Dogs with unibrows
                    </DropdownItem>
                </DropdownMenu>
            );
            return (
                <Dropdown overlay={menu}>
                    <Button>
                        Click on me <IconArrowDropDown />
                    </Button>
                </Dropdown>
            );
        })
    );
