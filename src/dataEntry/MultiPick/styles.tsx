import * as React from 'react';
import { rgba } from 'polished';
import {
  styled,
  ThemeProps,
  StyledComponent,
  ThemeInterface,
} from '../../styled-components';
import TextInput from '../TextInput';
import { setLightness } from 'polished';
import { Button, FullButtonProps } from '../../general/Button';

export const Container = styled('div')`
  width: 100%;
  position: relative;
  box-sizing: border-box;
`;

export interface DropdownProps extends ThemeProps {
  width?: string;
}

export const Dropdown = styled<DropdownProps, 'div'>('div')`
  box-sizing: inherit;
  position: absolute;
  min-width: 100%;
  max-width: ${({ width }) => width};
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  padding: 10px 10px 0;
  margin-top: 10px;
  z-index: ${props => props.theme.zIndexDropdownMenu};
`;

export const MultiPickButton = styled(Button)`
  margin: 0;
`;

export interface DropdownItemProps extends ThemeProps {
  checked: boolean;
}

export const DropdownItem = styled<DropdownItemProps, 'label'>('label')`
  box-sizing: inherit;
  width: 100%;
  display: block;
  cursor: pointer;
  padding: 2px 10px;

  &:hover {
    background: #ddd;
  }

  background: ${props =>
    props.checked ? setLightness(0.93, props.theme!.primaryColor) : ''};
`;

export interface DropdownActionBarProps extends ThemeProps {
  extraPadding?: boolean;
}

export const DropdownActionBar = styled<DropdownActionBarProps, 'div'>('div')`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ extraPadding }) => (extraPadding ? '10' : '6')}px;
`;

export const DropdownList = styled('div')`
  height: 180px;
  margin: 0 -10px;
`;

export const DropdownSearch = styled(TextInput as any)`
  margin-bottom: 6px;
`;
