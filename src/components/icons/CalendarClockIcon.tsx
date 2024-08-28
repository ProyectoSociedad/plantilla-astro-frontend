
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const CalendarClockIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 20 20" {...props}><path fill={fill} d="M11 18v2H9v-2H1a1 1 0 0 1-1-1V3h20v14a1 1 0 0 1-1 1zm-9-2h16V5H2zm9-9h5v2h-5zm0 4h5v2h-5zM7 7v3h3a3 3 0 1 1-3-3M0 0h20v2H0z"/></svg>

      );
      