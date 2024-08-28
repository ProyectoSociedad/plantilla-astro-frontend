
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const OpenBookIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 20 20" {...props}><path fill={fill} d="M11 18v2H9v-2H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a4 4 0 0 1 3 1.354A4 4 0 0 1 13 0h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm7-2V2h-5a2 2 0 0 0-2 2v12zm-9 0V4a2 2 0 0 0-2-2H2v14z"/></svg>

      );
      