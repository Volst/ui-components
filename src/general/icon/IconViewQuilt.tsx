import * as React from 'react';
import SvgIcon from '../Icon';

const IconViewQuilt: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z" />
  </SvgIcon>
);

export default IconViewQuilt;
