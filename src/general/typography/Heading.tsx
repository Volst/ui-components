import { styledTs, styled } from '../../styled-components';

interface HeadingProps {
  color?: string;
}

const Heading = styledTs<HeadingProps>(styled.h1)`
  font-weight: bold;
  font-size: 26px;
  margin: 20px 0;
  color: ${props => props.color || props.theme.headingTextColor};
`;
Heading.displayName = 'Heading';

export default Heading;
