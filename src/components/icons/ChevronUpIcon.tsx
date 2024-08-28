
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const ChevronUpIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 14 8" {...props}><path fill={fill} d="m7 2.828-4.95 4.95L.638 6.364 7 0l6.364 6.364-1.415 1.414z"/></svg>

      );
      