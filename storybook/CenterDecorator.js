import React from 'react';
import styled from 'styled-components';
import PageBootstrap from './PageBootstrap';

const Background = styled.div`
    background: #f9f9f9;
    width: 100%;
    height: 100%;
`;
const Wrapper = styled.div`
    background: ${props => props.theme.bodyBackground || '#fff'};
    width: 350px;
    padding: 30px;
`;

export default story =>
    <PageBootstrap>
        <Background>
            <Wrapper>
                {story()}
            </Wrapper>
        </Background>
    </PageBootstrap>;
