
      import React from "react";

      interface Props extends React.SVGAttributes<SVGElement> {
        size?: number | string;
        fill?: string;
      }

      export const ShieldCheckIcon = ({
        size = "1em",
        fill = "currentColor",
        ...props
      }: Props) => (

          <svg xmlns="http://www.w3.org/2000/svg" width={size}  fill={fill} viewBox="0 0 20 21" {...props}><path fill={fill} d="M9.861 1.39a3 3 0 0 1 3.275-.034L17.29 4H19a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1.52a2.65 2.65 0 0 1-1.285 2.449l-5.093 3.056a2 2 0 0 1-2.07-.008c-.7.62-1.779.688-2.561.073l-5.14-4.039a2 2 0 0 1-.565-2.446A2 2 0 0 1 0 12.51V5a1 1 0 0 1 1-1h4.947zM2.173 12.646l.692-.605a3 3 0 0 1 4.195.24l2.702 2.972a3 3 0 0 1 .396 3.487l5.009-3.005a.66.66 0 0 0 .278-.79l-4.427-6.198a1 1 0 0 0-1.101-.377l-2.486.745a3 3 0 0 1-2.983-.752l-.293-.292A2 2 0 0 1 3.68 6H2v6.51zm9.89-9.602a1 1 0 0 0-1.093.012l-5.4 3.6.292.293a1 1 0 0 0 .995.25l2.485-.745a3 3 0 0 1 3.303 1.13L16.515 13H18V6h-.709a2 2 0 0 1-1.074-.313zM4.181 13.545l-1.616 1.414 5.14 4.039.705-1.232a1 1 0 0 0-.129-1.169L5.58 13.625a1 1 0 0 0-1.398-.08"/></svg>

      );
      