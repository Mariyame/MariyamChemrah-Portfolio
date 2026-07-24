import { HTMLAttributes } from 'react';

export type CardVariant = 
 | "default"
 | "glass"
 | "elevated"
 | "transparent"


export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
  }