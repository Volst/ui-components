import * as React from 'react';
import SvgIcon from '../Icon';

const IconShortText: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M4 9h16v2H4zm0 4h10v2H4z" />
  </SvgIcon>
);

export default IconShortText;
