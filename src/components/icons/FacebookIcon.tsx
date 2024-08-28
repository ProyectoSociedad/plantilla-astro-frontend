
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const FacebookIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 11 20" {...props}><path fill={fill} d="M6.854 11.26h2.448l.98-3.916H6.853V5.385c0-1.008 0-1.958 1.959-1.958h1.468V.137C9.962.095 8.757 0 7.484 0 4.826 0 2.938 1.622 2.938 4.602v2.742H0v3.916h2.938v8.323h3.916z"/></svg>

      );
      