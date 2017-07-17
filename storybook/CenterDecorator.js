import React from 'react';
import styled from 'styled-components';
import ReCyCleTheme from '../src/ReCyCleTheme';

const Wrapper = styled.div`
    width: 350px;
    margin: 30px;
`;

const theme = {
    primary: '#006b94',
};

export default story =>
    <ReCyCleTheme theme={theme}>
        <Wrapper>
            {story()}
        </Wrapper>
    </ReCyCleTheme>;
