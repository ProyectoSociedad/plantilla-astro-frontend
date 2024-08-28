import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
type ButtonProps = React.ComponentPropsWithoutRef<typeof Button>;

interface Props extends ButtonProps {
  textLoading?: string;
  className?: string;
  isLoading?: boolean;
  validationDisabled?: boolean;
}
export function ButtonLoading({
  textLoading = "Espere, por favor",
  className,
  variant,
  isLoading,
  validationDisabled,
  children,
  ...props
}: Props) {
  return (
    <Button
      {...props}
      disabled={isLoading || validationDisabled}
      className={className}
      variant={variant}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {textLoading}
        </>
      ) : (
        children
      )}
    </Button>
  );
}
