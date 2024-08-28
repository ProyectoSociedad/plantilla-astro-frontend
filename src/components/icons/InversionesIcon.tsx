
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const InversionesIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 20 20" {...props}><path fill={fill} d="m2.41 12.526 3.402-3.402 2.828 2.829 3.157-3.157-1.793-1.793h5v5L13.21 10.21 8.64 14.781l-2.828-2.828-2.475 2.474a8 8 0 1 0-.927-1.9M.872 14.084l-.01-.01.004-.004a10 10 0 0 1-.862-4.067c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c-4.07 0-7.57-2.43-9.132-5.919"/></svg>

      );
      