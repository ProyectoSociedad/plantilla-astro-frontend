
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const WalletIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 18 20" {...props}><path fill={fill} d="M18 2H4a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1zM2 16a2 2 0 0 0 2 2h12V8H4a4 4 0 0 1-2-.535zM17 5H4a1 1 0 0 1 0-2h13z"/></svg>

      );
      