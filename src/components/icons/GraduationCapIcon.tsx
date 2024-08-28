
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const GraduationCapIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 24 20" {...props}><path fill={fill} d="M4 9.333 0 7l12-7 12 7v8.5h-2V8.167l-2 1.166v6.678l-.223.275A9.98 9.98 0 0 1 12 20a9.98 9.98 0 0 1-7.777-3.714L4 16.011zM6 10.5v4.792A7.98 7.98 0 0 0 12 18a7.98 7.98 0 0 0 6-2.708V10.5L12 14zM3.97 7 12 11.685 20.03 7 12 2.315z"/></svg>

      );
      