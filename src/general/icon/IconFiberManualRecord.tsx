import * as React from 'react';
import SvgIcon from '../Icon';

const IconFiberManualRecord: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="12" r="8" />
  </SvgIcon>
);

export default IconFiberManualRecord;
