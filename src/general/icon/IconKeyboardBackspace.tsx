import * as React from 'react';
import SvgIcon from '../Icon';

const IconKeyboardBackspace: React.SFC<React.SVGProps<SVGSVGElement>> = ({
  ref,
  ...props
}) => (
  <SvgIcon {...props}>
    <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z" />
  </SvgIcon>
);

export default IconKeyboardBackspace;
