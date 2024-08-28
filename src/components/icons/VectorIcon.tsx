
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const VectorIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 13 13" {...props}><path fill={fill} d="M9.589 11.003.982 2.397 2.397.982l8.606 8.607V2.003h2v11h-11v-2z"/></svg>

      );
      