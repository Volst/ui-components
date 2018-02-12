import * as React from 'react';
import SvgIcon from '../Icon';

const IconViewCompact: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z" />
  </SvgIcon>
);

export default IconViewCompact;
