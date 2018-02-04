import * as React from 'react';
import { styled } from '../styled-components';

const Bubble = styled.sup`
  background: ${props => props.theme.dangerColor};
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
  font-weight: bold;
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

interface BadgeProps {
  count?: number;
  className?: string;
}

export default class Badge extends React.Component<BadgeProps, {}> {
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
