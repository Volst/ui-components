import * as React from 'react';
import SvgIcon from '../Icon';

const IconCallMade: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" />
  </SvgIcon>
);

export default IconCallMade;
