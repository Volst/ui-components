import * as React from 'react';
import SvgIcon from '../Icon';

const IconSkipPrevious: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
  </SvgIcon>
);

export default IconSkipPrevious;
