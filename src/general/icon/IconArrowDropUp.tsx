import * as React from 'react';
import SvgIcon from '../Icon';

const IconArrowDropUp: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M7 14l5-5 5 5z" />
  </SvgIcon>
);

export default IconArrowDropUp;
