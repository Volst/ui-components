import { styled } from '../../styled-components';

interface SuperTextProps {
  color?: string;
}

const SuperText = styled.h3`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;
  margin: 20px 0 7px 0;
  color: ${(props: SuperTextProps) => props.color};
`;
SuperText.displayName = 'SuperText';

export default SuperText;
