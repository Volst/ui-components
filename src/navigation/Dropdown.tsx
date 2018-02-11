import * as React from 'react';
import {
  styled,
  StyledComponentClass,
  ThemeInterface,
} from '../styled-components';
import { setLightness } from 'polished';
import onClickOutside from 'react-onclickoutside';

const RelativeWrapper = styled.div`
  position: relative;
`;

export interface DropdownProps {
  overlay: React.ReactElement<any>;
  opened?: boolean;
  onChange?: (value: boolean) => void;
}

class MyDropdown extends React.Component<DropdownProps, { opened: boolean }> {
  state = {
    opened: false,
  };

  showOverlay = e => {
    e.stopPropagation();
    if (this.props.onChange) {
      this.props.onChange(true);
    } else {
      this.setState({ opened: true });
    }
  };

  hideOverlay = () => {
    if (this.props.onChange) {
      this.props.onChange(false);
    } else {
      this.setState({ opened: false });
    }
  };

  handleClickOutside = () => {
    this.hideOverlay();
  };

  render() {
    return (
      <RelativeWrapper onClick={this.showOverlay}>
        {this.props.children}
        {(this.state.opened || this.props.opened) && this.props.overlay}
      </RelativeWrapper>
    );
  }
}

export const Dropdown: React.SFC<DropdownProps> = onClickOutside(MyDropdown);
Dropdown.displayName = 'Dropdown';

export const DropdownOverlay = styled.div`
  position: absolute;
  z-index: ${props => props.theme.zIndexDropdownMenu};
  margin-top: 2px;
`;

export const DropdownMenu = styled.div`
  background: ${props => props.theme.componentBackground};
  border-radius: 5px;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  padding: 10px 15px;
  color: ${props => props.theme.textColor};
  cursor: pointer;
  user-select: none;
  &:hover {
    ${props => {
      const background = setLightness(0.93, props.theme.primaryColor);
      return `
        background: ${background};
      `;
    }};
  }
`;
