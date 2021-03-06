import * as React from 'react';
import SvgIcon from '../Icon';

const IconSubdirectoryArrowLeft: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z" />
  </SvgIcon>
);

export default IconSubdirectoryArrowLeft;
