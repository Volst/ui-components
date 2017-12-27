import styled from 'styled-components';
import TextInput from '../TextInput';
import { setLightness } from 'polished';
import { Button } from '../../general/Button';

export const Container = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
`;

export const Dropdown = styled.div`
  box-sizing: inherit;
  position: absolute;
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
  z-index: 1;
`;

export const MultiPickButton = styled(Button)`
  margin: 0;
`;

export const DropdownItem = styled.label`
  box-sizing: inherit;
  width: 100%;
  display: block;
  cursor: pointer;
  padding: 2px 10px;

  &:hover {
    background: #ddd;
  }

  background: ${props =>
    props.checked ? setLightness(0.93, props.theme.primaryColor) : ''};
`;

export const DropdownActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const DropdownList = styled.div`
  height: 180px;
  overflow-y: scroll;
  margin: 0 -10px;
`;

export const DropdownSearch = styled(TextInput)`
  margin-bottom: 10px;
`;
