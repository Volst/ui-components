import * as React from 'react';
import SvgIcon from '../Icon';

const IconNearMe: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
  </SvgIcon>
);

export default IconNearMe;
