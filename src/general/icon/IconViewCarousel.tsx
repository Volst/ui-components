import * as React from 'react';
import SvgIcon from '../Icon';

const IconViewCarousel: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z" />
  </SvgIcon>
);

export default IconViewCarousel;
