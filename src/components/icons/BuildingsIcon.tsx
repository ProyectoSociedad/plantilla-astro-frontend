
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const BuildingsIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 22 18" {...props}><path fill={fill} d="M20 16h2v2H0v-2h2V1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h4V8h-2V6h3a1 1 0 0 1 1 1zM4 2v14h8V2zm2 6h4v2H6zm0-4h4v2H6z"/></svg>

      );
      