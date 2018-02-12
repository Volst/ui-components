import * as React from 'react';
import SvgIcon from '../Icon';

const IconAdd: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </SvgIcon>
);

export default IconAdd;
