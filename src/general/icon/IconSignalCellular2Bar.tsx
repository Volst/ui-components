import * as React from 'react';
import SvgIcon from '../Icon';

const IconSignalCellular2Bar: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path fillOpacity=".3" d="M2 22h20V2z" />
    <path d="M14 10L2 22h12z" />
  </SvgIcon>
);

export default IconSignalCellular2Bar;
