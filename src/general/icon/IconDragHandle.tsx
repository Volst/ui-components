import * as React from 'react';
import SvgIcon from '../Icon';

const IconDragHandle: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
  </SvgIcon>
);

export default IconDragHandle;
