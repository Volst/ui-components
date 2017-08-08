import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import IconDelete from './icon/IconDelete';
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
        disabled: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
        onDelete: PropTypes.func,
    };

    handleClick = () => {
        this.props.onChange();
    };

    render() {
        const { opened, children, onDelete, title, disabled } = this.props;
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
                    {onDelete &&
                        <Button onClick={onDelete} unstyled disabled={disabled}>
                            <IconDelete color="#DE0000" />
                        </Button>}
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
