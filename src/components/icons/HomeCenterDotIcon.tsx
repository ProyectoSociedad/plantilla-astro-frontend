
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const HomeCenterDotIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 22 20" {...props}><path fill={fill} d="M18 20H4a1 1 0 0 1-1-1v-9H0L10.327.61a1 1 0 0 1 1.346 0L22 10h-3v9a1 1 0 0 1-1 1M5 18h12V8.157l-6-5.454-6 5.454zm3-9h6v6H8zm2 2v2h2v-2z"/></svg>

      );
      