import * as React from 'react';
import SvgIcon from '../Icon';

const IconCallReceived: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" />
  </SvgIcon>
);

export default IconCallReceived;
