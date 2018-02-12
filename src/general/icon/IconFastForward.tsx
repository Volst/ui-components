import * as React from 'react';
import SvgIcon from '../Icon';

const IconFastForward: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
  </SvgIcon>
);

export default IconFastForward;
