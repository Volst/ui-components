import * as React from 'react';
import SvgIcon from '../Icon';

const IconArrowDropDown: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M7 10l5 5 5-5z" />
  </SvgIcon>
);

export default IconArrowDropDown;
