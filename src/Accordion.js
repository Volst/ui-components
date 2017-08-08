import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import IconDelete from './icon/IconDelete';
import KeyboardArrowDown from './icon/IconKeyboardArrowDown';
import { observer } from 'mobx-react';
import { omit } from 'lodash';

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

const StyledButton = styled(props => <Button {...omit(props, 'opened')} />)`
    transform: rotate(${props => (props.opened ? '180' : '0')}deg);
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
        return (
            <StyledContainer>
                <StyledTitleContainer>
                    <StyledButton
                        unstyled
                        icon
                        onClick={this.handleClick}
                        opened={opened}
                    >
                        <KeyboardArrowDown
                            color="#006b94"
                            width="24"
                            height="24"
                        />
                    </StyledButton>
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
