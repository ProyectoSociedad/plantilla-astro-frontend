
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const ChevronRightIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 8 14" {...props}><path fill={fill} d="M5.172 7 .222 2.05 1.638.638 8 7l-6.364 6.364L.223 11.95z"/></svg>

      );
      