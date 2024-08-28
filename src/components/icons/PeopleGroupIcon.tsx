
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const PeopleGroupIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 20 20" {...props}><path fill={fill} d="M10 9a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L10 11a3 3 0 0 0-2.995 2.824L7 14v6H5v-6a5 5 0 0 1 5-5m-6.5 3q.42.001.81.094a6 6 0 0 0-.301 1.575L4 14v.086a1.5 1.5 0 0 0-.356-.08L3.5 14a1.5 1.5 0 0 0-1.493 1.355L2 15.5V20H0v-4.5A3.5 3.5 0 0 1 3.5 12m13 0a3.5 3.5 0 0 1 3.5 3.5V20h-2v-4.5a1.5 1.5 0 0 0-1.355-1.493L16.5 14q-.264.001-.5.085V14c0-.666-.108-1.306-.309-1.904q.39-.095.809-.096m-13-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m-13 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m13 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/></svg>

      );
      