import * as React from 'react';
import SvgIcon from '../Icon';

const IconPublish: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z" />
  </SvgIcon>
);

export default IconPublish;
