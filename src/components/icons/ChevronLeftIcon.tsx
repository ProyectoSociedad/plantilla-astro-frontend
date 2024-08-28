
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const ChevronLeftIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 8 14" {...props}><path fill={fill} d="m2.828 7 4.95 4.95-1.414 1.415L0 7 6.364.637 7.778 2.05z"/></svg>

      );
      