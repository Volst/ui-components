import * as React from 'react';
import SvgIcon from '../Icon';

const IconDehaze: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M2 15.5v2h20v-2H2zm0-5v2h20v-2H2zm0-5v2h20v-2H2z" />
  </SvgIcon>
);

export default IconDehaze;
