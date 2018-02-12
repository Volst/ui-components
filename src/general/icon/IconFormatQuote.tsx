import * as React from 'react';
import SvgIcon from '../Icon';

const IconFormatQuote: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </SvgIcon>
);

export default IconFormatQuote;
