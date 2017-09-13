import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import KeyboardArrowDown from './icon/IconKeyboardArrowDown';
import KeyboardArrowUp from './icon/IconKeyboardArrowUp';
import { observer } from 'mobx-react';

const StyledContainer = styled.div`
    background-color: #eee;
    border-radius: 4px;
`;

const StyledContent = styled.div`
    padding: 0 10px 10px 10px;
    margin-bottom: 10px;
`;

const StyledTitle = styled.div`
    flex: 1;
    padding: 10px;
`;

const StyledTitleContainer = styled.div`
    margin-bottom: 10px;
    position: relative;
    display: flex;
    align-items: center;
`;

@observer
export default class Accordion extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
            .isRequired,
        opened: PropTypes.bool.isRequired,
        onChange: PropTypes.func.isRequired,
        action: PropTypes.node,
    };

    handleClick = () => {
        this.props.onChange();
    };

    render() {
        const { opened, children, action, title } = this.props;
        const IconToggle = opened ? KeyboardArrowDown : KeyboardArrowUp;
        return (
            <StyledContainer>
                <StyledTitleContainer>
                    <Button unstyled icon onClick={this.handleClick}>
                        <IconToggle color="#006b94" width="24" height="24" />
                    </Button>
                    <StyledTitle>
                        {title}
                    </StyledTitle>
                    {action}
                </StyledTitleContainer>
                {opened
                    ? <StyledContent>
                          {children}
                      </StyledContent>
                    : null}
            </StyledContainer>
        );
    }
}
