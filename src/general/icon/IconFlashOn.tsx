import * as React from 'react';
import SvgIcon from '../Icon';

const IconFlashOn: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M7 2v11h3v9l7-12h-4l4-8z" />
  </SvgIcon>
);

export default IconFlashOn;
