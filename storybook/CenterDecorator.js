import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 350px;
    margin: 30px;
`;

export default story =>
    <Wrapper>
        {story()}
    </Wrapper>;
