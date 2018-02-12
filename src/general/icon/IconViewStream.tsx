import * as React from 'react';
import SvgIcon from '../Icon';

const IconViewStream: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z" />
  </SvgIcon>
);

export default IconViewStream;
