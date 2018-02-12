import * as React from 'react';
import SvgIcon from '../Icon';

const IconFormatAlignJustify: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z" />
  </SvgIcon>
);

export default IconFormatAlignJustify;
