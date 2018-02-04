import { styled, ThemeProps } from '../../styled-components';

interface SubheadingProps extends ThemeProps {
  color?: string;
}

const Subheading = styled.h2`
  font-weight: normal;
  font-size: 20px;
  margin: 20px 0 7px 0;
  color: ${(props: SubheadingProps) => props.color || props.theme.primaryColor};
`;
Subheading.displayName = 'Subheading';

export default Subheading;
