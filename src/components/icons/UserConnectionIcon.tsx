
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const UserConnectionIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 22 21" {...props}><path fill={fill} d="M17 6h5v2h-5zm-2 5h7v2h-7zm3 5h4v2h-4zM0 21a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4"/></svg>

      );
      