import * as React from 'react';
import SvgIcon from '../Icon';

const IconPlayArrow: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M8 5v14l11-7z" />
  </SvgIcon>
);

export default IconPlayArrow;
