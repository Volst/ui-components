import * as React from 'react';
import SvgIcon from '../Icon';

const IconChangeHistory: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" />
  </SvgIcon>
);

export default IconChangeHistory;
