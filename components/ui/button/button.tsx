import { cn } from "@/lib/utils";

import { ButtonProps } from "./button.types";
import { buttonVariants } from "./button.styles";

export const Button =
  ({
  variant,
  size,
  className,
  children,
  ...props
}: ButtonProps
    
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  };


Button.displayName = "Button";