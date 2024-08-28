
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const HouseOutlineIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 20 18" {...props}><path fill={fill} d="M19 18H1a1 1 0 0 1-1-1V9.487a1 1 0 0 1 .343-.754L4 5.544V1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M7 16h3V9.942L6 6.454 2 9.942V16h3v-4h2zm5 0h6V2H6v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754zm2-8h2v2h-2zm0 4h2v2h-2zm0-8h2v2h-2zm-4 0h2v2h-2z"/></svg>

      );
      