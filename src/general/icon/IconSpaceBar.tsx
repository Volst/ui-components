import * as React from 'react';
import SvgIcon from '../Icon';

const IconSpaceBar: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M18 9v4H6V9H4v6h16V9z" />
  </SvgIcon>
);

export default IconSpaceBar;
