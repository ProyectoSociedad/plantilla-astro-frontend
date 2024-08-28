
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const TiktokIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 19 20" {...props}><path fill={fill} d="M9 0v6.414a6.85 6.85 0 1 0 5.6 6.736V9.414a8.6 8.6 0 0 0 3.4.686h1V4.5h-1c-1.903 0-3.4-1.537-3.4-3.5V0zm2 2h1.688c.394 2.22 2.08 3.996 4.312 4.41v1.618c-1.038-.152-1.975-.542-2.843-1.123L12.6 5.863v7.287A4.85 4.85 0 1 1 8 8.306V9.91a3.25 3.25 0 1 0 3 3.24zM6.5 13.15a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"/></svg>

      );
      