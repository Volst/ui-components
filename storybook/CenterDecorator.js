import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
    width: 350px;
    margin: 30px;
`;

const theme = {
    primary: '#006b94',
};

export default story =>
    <ThemeProvider theme={theme}>
        <Wrapper>
            {story()}
        </Wrapper>
    </ThemeProvider>;
