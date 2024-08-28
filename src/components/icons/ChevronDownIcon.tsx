
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const ChevronDownIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 14 8" {...props}><path fill={fill} d="m7 5.171 4.95-4.95 1.415 1.415L7 8 .637 1.636 2.05.222z"/></svg>

      );
      