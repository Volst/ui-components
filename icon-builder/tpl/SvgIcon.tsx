import * as React from 'react';
import SvgIcon from '{{{ muiRequireStmt }}}';

const {{className}}: React.SFC<React.SVGProps<SVGSVGElement>> = ({ref, ...props}) => (
  <SvgIcon {...props}>
    {{{paths}}}
  </SvgIcon>
);

export default {{className}};
