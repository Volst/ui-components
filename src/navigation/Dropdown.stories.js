import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Button } from '../general/Button';
import {
    Dropdown,
    DropdownOverlay,
    DropdownMenu,
    DropdownItem,
} from './Dropdown';
import IconArrowDropDown from '../general/icon/IconArrowDropDown';
import CenterDecorator from '../../storybook/CenterDecorator';

storiesOf('Navigation / Dropdown', module)
    .addDecorator(CenterDecorator)
    .add(
        'standard',
        withInfo()(() => {
            const overlay = (
                <DropdownOverlay>
                    <DropdownMenu>
                        <DropdownItem onClick={action('click')}>
                            Lions
                        </DropdownItem>
                        <DropdownItem onClick={action('click')}>
                            Elephants
                        </DropdownItem>
                        <DropdownItem onClick={action('click')}>
                            Dogs with unibrows
                        </DropdownItem>
                    </DropdownMenu>
                </DropdownOverlay>
            );
            return (
                <Dropdown overlay={overlay}>
                    <Button>
                        Click on me <IconArrowDropDown />
                    </Button>
                </Dropdown>
            );
        })
    );
