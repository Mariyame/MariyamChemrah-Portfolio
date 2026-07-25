import { ButtonHTMLAttributes } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"

export type ButtonSize =
  | "sm"
  | "md"
  | "full";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}