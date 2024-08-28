
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const MenuIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 18 16" {...props}><path fill={fill} d="M0 0h18v2H0zm6 7h12v2H6zm-6 7h18v2H0z"/></svg>

      );
      