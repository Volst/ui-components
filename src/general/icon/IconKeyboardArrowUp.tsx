import * as React from 'react';
import SvgIcon from '../Icon';

const IconKeyboardArrowUp: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </SvgIcon>
);

export default IconKeyboardArrowUp;
