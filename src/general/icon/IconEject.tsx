import * as React from 'react';
import SvgIcon from '../Icon';

const IconEject: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
  </SvgIcon>
);

export default IconEject;
