
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const LegalIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 22 22" {...props}><path fill={fill} d="M12.004 20.003v2h-12v-2zM12.59.689l7.778 7.778-1.414 1.415-1.061-.354-2.475 2.475 5.657 5.657-1.414 1.414-5.657-5.657-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.414-1.415 1.132.283 6.293-6.293-.354-1.06zm.707 3.536-7.071 7.07 3.535 3.536 7.071-7.07z"/></svg>

      );
      