import * as React from 'react';
import SvgIcon from '../Icon';

const IconBrightness1: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="10" />
  </SvgIcon>
);

export default IconBrightness1;
