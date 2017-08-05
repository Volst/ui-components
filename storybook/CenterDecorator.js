import React from 'react';
import styled from 'styled-components';
import ReCyCleTheme from '../src/ReCyCleTheme';
import { BrowserRouter } from 'react-router-dom';

const Background = styled.div`
    background: #f9f9f9;
    width: 100%;
    height: 100%;
`;
const Wrapper = styled.div`
    background: #fff;
    width: 350px;
    padding: 30px;
`;

const theme = {
    primary: '#006b94',
};

export default story =>
    <ReCyCleTheme theme={theme}>
        <BrowserRouter>
            <Background>
                <Wrapper>
                    {story()}
                </Wrapper>
            </Background>
        </BrowserRouter>
    </ReCyCleTheme>;
