import * as React from 'react';
import SvgIcon from '../Icon';

const IconRemove: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M19 13H5v-2h14v2z" />
  </SvgIcon>
);

export default IconRemove;
