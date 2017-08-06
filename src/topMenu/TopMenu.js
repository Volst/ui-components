import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const Menu = styled.header`
    display: flex;
    align-items: stretch;
    flex-direction: column;
`;

export default class TopMenu extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    render() {
        return (
            <Menu>
                {this.props.children}
            </Menu>
        );
    }
}
