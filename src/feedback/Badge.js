import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { theme } from '../config';

const Bubble = styled.sup`
    background: ${props => theme(props, 'dangerColor')};
    position: absolute;
    min-width: 16px;
    height: 16px;
    line-height: 17px;
    padding: 0 6px;
    white-space: nowrap;
    top: -8px;
    transform: translateX(-50%);
    border-radius: 8px;
    text-align: center;
    color: #fff;
    font-size: 11px;
`;

const Wrapper = styled.div`
    position: relative;
    display: inline-block;
`;

export default class Badge extends Component {
    static propTypes = {
        count: PropTypes.number,
        children: PropTypes.node,
        className: PropTypes.string,
    };

    render() {
        const { count, children, className } = this.props;
        return (
            <Wrapper className={className}>
                {children}
                {count !== 0 && <Bubble>{count}</Bubble>}
            </Wrapper>
        );
    }
}
