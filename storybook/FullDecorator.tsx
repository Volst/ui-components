import * as React from 'react';
import styled from 'styled-components';
import PageBootstrap from './PageBootstrap';

// Ugly hacks because Storybook inserts two divs between the <body> and our React component root
const Wrapper = styled.div`
  height: 100%;

  > div,
  > div > div[style^='position: relative;'] {
    height: 100%;
  }
`;

export default story => (
  <PageBootstrap>
    <Wrapper>{story()}</Wrapper>
  </PageBootstrap>
);
