import * as React from 'react';
import SvgIcon from '../Icon';

const IconSignalCellular3Bar: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path fillOpacity=".3" d="M2 22h20V2z" />
    <path d="M17 7L2 22h15z" />
  </SvgIcon>
);

export default IconSignalCellular3Bar;
