import { styledTs, styled } from '../../styled-components';

interface SubheadingProps {
  color?: string;
}

const Subheading = styledTs<SubheadingProps>(styled.h2)`
  font-weight: normal;
  font-size: 20px;
  margin: 20px 0 7px 0;
  color: ${props => props.color || props.theme.primaryColor};
`;
Subheading.displayName = 'Subheading';

export default Subheading;
