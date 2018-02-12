import * as React from 'react';
import SvgIcon from '../Icon';

const IconStop: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M6 6h12v12H6z" />
  </SvgIcon>
);

export default IconStop;
