import * as React from 'react';
import SvgIcon from '../Icon';

const IconChevronRight: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </SvgIcon>
);

export default IconChevronRight;
