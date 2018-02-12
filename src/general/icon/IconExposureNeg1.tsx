import * as React from 'react';
import SvgIcon from '../Icon';

const IconExposureNeg1: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z" />
  </SvgIcon>
);

export default IconExposureNeg1;
