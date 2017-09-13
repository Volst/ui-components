import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-size: 12px;
    padding: 0 0 2px;
    opacity: 0.75;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    overflow: hidden;
`;

const StyledLabel = styled.label`text-transform: uppercase;`;

export default class LabelText extends Component {
    static propTypes = {
        helpText: PropTypes.string,
        children: PropTypes.node.isRequired,
    };

    render() {
        return (
            <Container>
                <StyledLabel>
                    {this.props.children}
                </StyledLabel>
                <div>
                    {this.props.helpText}
                </div>
            </Container>
        );
    }
}
