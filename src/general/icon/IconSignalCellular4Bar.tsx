import * as React from 'react';
import SvgIcon from '../Icon';

const IconSignalCellular4Bar: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M2 22h20V2z" />
  </SvgIcon>
);

export default IconSignalCellular4Bar;
