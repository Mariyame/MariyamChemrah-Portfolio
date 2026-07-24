import { cn } from '@/lib/utils';
import { CardProps } from "./card.types";
import { cardVariants } from './card.styles';

export const Card = ({
  variant,
  className,
  children,
  ...props
}:CardProps 
) => {
    return (
    <div
      className={cn(
        cardVariants({variant}),
        className
      )}
      {...props}
    >
      {children}
    </div>
    )
};

Card.dislayName = "Card";

