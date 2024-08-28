
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const MobilePhoneIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 14 20" {...props}><path fill={fill} d="M2 2v16h10V2zM1 0h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1m6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/></svg>

      );
      