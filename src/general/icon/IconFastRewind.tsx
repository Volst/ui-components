import * as React from 'react';
import SvgIcon from '../Icon';

const IconFastRewind: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
  </SvgIcon>
);

export default IconFastRewind;
