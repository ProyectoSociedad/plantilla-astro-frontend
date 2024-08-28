
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const VentasIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 18 20" {...props}><path fill={fill} d="M8 5h2v10H8zm4 4h2v6h-2zm-8 2h2v4H4zm8-9H2v16h14V6h-4zM0 .992C0 .444.447 0 .999 0H13l5 5v13.993A1 1 0 0 1 17.007 20H.993A1 1 0 0 1 0 19.008z"/></svg>

      );
      