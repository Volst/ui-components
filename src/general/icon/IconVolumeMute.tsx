import * as React from 'react';
import SvgIcon from '../Icon';

const IconVolumeMute: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M7 9v6h4l5 5V4l-5 5H7z" />
  </SvgIcon>
);

export default IconVolumeMute;
