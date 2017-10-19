import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../config';

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${props => theme(props, 'zIndexModal')};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Background = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const Content = styled.div`
    position: relative;
    background: ${props => theme(props, 'componentBackground')};
    border-radius: 4px;
    display: flex;
    overflow: hidden;
    height: 80vh;
    width: 80vw;
    max-width: 800px;
    max-height: 800px;
`;

const ESCAPE_KEY = 27;

export default class Modal extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    componentWillMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.keyCode === ESCAPE_KEY) {
            this.props.onClose();
        }
    };

    render() {
        return (
            <Container>
                <Background onClick={this.props.onClose} />
                <Content>{this.props.children}</Content>
            </Container>
        );
    }
}
