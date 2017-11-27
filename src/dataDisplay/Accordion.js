import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from '../general/Button';
import KeyboardArrowDown from '../general/icon/IconKeyboardArrowDown';
import KeyboardArrowUp from '../general/icon/IconKeyboardArrowUp';
import { withTheme } from 'styled-components';

const StyledContainer = styled.div`
    background-color: ${props => props.theme.lightColor};
    border-radius: 4px;
    margin-bottom: 10px;
    overflow: hidden;
`;

const StyledContent = styled.div`
    padding: 10px;

    ${props =>
        props.background
            ? `
        background: ${props.background};
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
`;

@withTheme
export default class Accordion extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
            .isRequired,
        opened: PropTypes.bool.isRequired,
        onChange: PropTypes.func.isRequired,
        action: PropTypes.node,
        theme: PropTypes.object.isRequired,
        contentBackground: PropTypes.string,
    };

    handleClick = () => {
        this.props.onChange();
    };

    render() {
        const {
            opened,
            children,
            action,
            title,
            contentBackground,
        } = this.props;
        const IconToggle = opened ? KeyboardArrowUp : KeyboardArrowDown;
        return (
            <StyledContainer>
                <StyledTitleContainer>
                    <Button icon onClick={this.handleClick}>
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
