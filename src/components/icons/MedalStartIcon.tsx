
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const MedalStartIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 16 21" {...props}><path fill={fill} d="m8 6.5 2.115 5.088 5.493.44-4.185 3.585 1.278 5.36L8 18.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44zm0 5.207-.74 1.776-1.916.154 1.46 1.251-.447 1.871L8 15.756 9.64 16.76l-.446-1.87 1.46-1.252-1.916-.154zM4 0v9H2V0zm10 0v9h-2V0zM9 0v5H7V0z"/></svg>

      );
      