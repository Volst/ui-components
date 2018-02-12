import * as React from 'react';
import SvgIcon from '../Icon';

const IconSignalCellular1Bar: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path fillOpacity=".3" d="M2 22h20V2z" />
    <path d="M12 12L2 22h10z" />
  </SvgIcon>
);

export default IconSignalCellular1Bar;
