
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const DollarSignIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 18 20" {...props}><path fill={fill} d="M14.004 14.003h2v-12h-10v2h8zm0 2v2.999c0 .553-.45 1-1.007 1H1.01a1 1 0 0 1-1.007-1L.007 5.004c0-.553.45-1.001 1.006-1.001h2.99v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-11.998-10-.002 12h10v-12zm1.998 8h4.5a.5.5 0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5h.5v-1h2v1h2v2h-4.5a.5.5 0 0 0 0 1h3a2.5 2.5 0 0 1 0 5h-.5v1h-2v-1h-2z"/></svg>

      );
      