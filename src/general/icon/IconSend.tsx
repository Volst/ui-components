import * as React from 'react';
import SvgIcon from '../Icon';

const IconSend: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </SvgIcon>
);

export default IconSend;
