import React from 'react';
import styled from 'styled-components';
import ReCyCleTheme from '../src/ReCyCleTheme';
import { BrowserRouter } from 'react-router-dom';

const Wrapper = styled.div`
    width: 350px;
    margin: 30px;
`;

const theme = {
    primary: '#006b94',
};

export default story =>
    <ReCyCleTheme theme={theme}>
        <BrowserRouter>
            <Wrapper>
                {story()}
            </Wrapper>
        </BrowserRouter>
    </ReCyCleTheme>;
