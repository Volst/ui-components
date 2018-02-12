import * as React from 'react';
import SvgIcon from '../Icon';

const IconTrendingFlat: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M22 12l-4-4v3H3v2h15v3z" />
  </SvgIcon>
);

export default IconTrendingFlat;
