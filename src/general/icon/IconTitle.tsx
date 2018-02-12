import * as React from 'react';
import SvgIcon from '../Icon';

const IconTitle: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M5 4v3h5.5v12h3V7H19V4z" />
  </SvgIcon>
);

export default IconTitle;
