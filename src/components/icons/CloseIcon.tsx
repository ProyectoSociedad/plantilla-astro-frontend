
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const CloseIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 14 14" {...props}><path fill={fill} d="m6.999 5.587 4.95-4.95 1.414 1.414L8.413 7l4.95 4.95-1.415 1.414-4.95-4.95-4.949 4.95L.635 11.95 5.585 7 .635 2.05 2.049.638z"/></svg>

      );
      