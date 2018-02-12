import * as React from 'react';
import SvgIcon from '../Icon';

const IconFlag: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
  </SvgIcon>
);

export default IconFlag;
