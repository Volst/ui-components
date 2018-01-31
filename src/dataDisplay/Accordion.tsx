import * as React from 'react';
import { styledTs, styled, withTheme } from '../styled-components';
import { Button } from '../general/Button';
import KeyboardArrowDown from '../general/icon/IconKeyboardArrowDown';
import KeyboardArrowUp from '../general/icon/IconKeyboardArrowUp';

const StyledContainer = styled.div`
  background-color: ${props => props.theme.lightColor};
  border-radius: 4px;
  margin-bottom: 10px;
`;

interface StyledContentProps {
  background?: string;
}
const StyledContent = styledTs<StyledContentProps>(styled.div)`
  padding: 10px;

  ${props =>
    props.background
      ? `
        background: ${props.background};
        border-radius: 0 0 4px 4px;
    `
      : ''};
`;

const StyledTitle = styled.div`
  flex: 1;
  padding: 10px;
`;

const StyledTitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 4px;
`;

interface AccordionProps {
  title: string | React.ReactNode;
  opened: boolean;
  onChange: () => void;
  action?: React.ReactNode;
  contentBackground?: string;
}

@withTheme
export default class Accordion extends React.Component<AccordionProps, {}> {
  handleClick = () => {
    this.props.onChange();
  };

  render() {
    const { opened, children, action, title, contentBackground } = this.props;
    const IconToggle = opened ? KeyboardArrowUp : KeyboardArrowDown;
    return (
      <StyledContainer>
        <StyledTitleContainer>
          <Button ghost onClick={this.handleClick}>
            <IconToggle
              color={this.props.theme.primaryColor}
              width="24"
              height="24"
            />
          </Button>
          <StyledTitle>{title}</StyledTitle>
          {action}
        </StyledTitleContainer>
        {opened ? (
          <StyledContent background={contentBackground}>
            {children}
          </StyledContent>
        ) : null}
      </StyledContainer>
    );
  }
}
