
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const SearchDocIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 18 20" {...props}><path fill={fill} d="M12 2H2v16h14V6h-4zM0 .992C0 .444.447 0 .999 0H13l5 5v13.993A1 1 0 0 1 17.007 20H.993A1 1 0 0 1 0 19.008zm10.529 11.454a4.001 4.001 0 0 1-4.86-6.274 4 4 0 0 1 6.274 4.86l2.21 2.21-1.414 1.415zm-.618-2.032a2 2 0 1 0-2.828-2.828 2 2 0 0 0 2.828 2.828"/></svg>

      );
      