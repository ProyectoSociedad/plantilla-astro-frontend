
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const DocumentIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 18 20" {...props}><path fill={fill} d="M17 20H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V2H2v16zM5 5h8v2H5zm0 4h8v2H5zm0 4h5v2H5z"/></svg>

      );
      