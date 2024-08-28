
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const PhoneIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 18 18" {...props}><path fill={fill} d="M6.366 7.682a10.56 10.56 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.4 11.4 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995Q16.307 18 15.5 18C6.94 18 0 11.06 0 2.5Q0 1.693.082.898A1 1 0 0 1 1.077 0h4.462a1 1 0 0 1 .997.921A11.4 11.4 0 0 0 7.9 5.504a1 1 0 0 1-.296 1.294zm-2.522-.657 1.9-1.357A13.4 13.4 0 0 1 4.647 2H2.01Q2 2.25 2 2.5C2 9.956 8.044 16 15.5 16q.25 0 .5-.01v-2.637a13.4 13.4 0 0 1-3.668-1.097l-1.357 1.9a12.5 12.5 0 0 1-1.588-.75l-.058-.033a12.56 12.56 0 0 1-4.702-4.702l-.033-.058a12.4 12.4 0 0 1-.75-1.588"/></svg>

      );
      