import * as React from 'react';
import SvgIcon from '../Icon';

const IconPriorityHigh: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <circle cx="12" cy="19" r="2" />
    <path d="M10 3h4v12h-4z" />
  </SvgIcon>
);

export default IconPriorityHigh;
