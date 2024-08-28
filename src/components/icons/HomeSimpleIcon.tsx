
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const HomeSimpleIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 23 20" {...props}><path fill={fill} d="M11.673.612 19.8 8h-2.973L11 2.703 5 8.158V18h5v2H4a1 1 0 0 1-1-1v-9H0L10.327.612a1 1 0 0 1 1.346 0M13 10h9v7h-9zm2 2v3h5v-3zm8 8H12v-2h11z"/></svg>

      );
      