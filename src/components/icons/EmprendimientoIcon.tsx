
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const EmprendimientoIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 20 18" {...props}><path fill={fill} d="M20 17V4l-2-4H2L0 4.004V17a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1M2 6h16v10H2zm1.236-4h13.528l1 2H2.237zM13 8H7v2h6z"/></svg>

      );
      