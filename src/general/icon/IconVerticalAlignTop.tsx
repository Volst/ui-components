import * as React from 'react';
import SvgIcon from '../Icon';

const IconVerticalAlignTop: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
  </SvgIcon>
);

export default IconVerticalAlignTop;
