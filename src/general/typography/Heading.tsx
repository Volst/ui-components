import { styled, ThemeProps } from '../../styled-components';

interface HeadingProps extends ThemeProps {
  color?: string;
}
const Heading = styled.h1`
  font-weight: bold;
  font-size: 26px;
  margin: 20px 0;
  color: ${(props: HeadingProps) =>
    props.color || props.theme.headingTextColor};
`;
Heading.displayName = 'Heading';

export default Heading;
