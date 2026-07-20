import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "gold" | "outline" | "ghost" | "teal-outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  gold: "border-none bg-gradient-to-br from-gold-bright to-gold-deep text-surface font-bold hover:brightness-[1.07]",
  outline:
    "border border-text/[.18] bg-transparent text-text font-medium hover:border-gold/50",
  ghost:
    "border border-gold/40 bg-gold/10 text-gold-bright font-bold hover:bg-gold/[.16]",
  "teal-outline":
    "border border-teal/35 bg-teal/[.08] text-teal font-bold hover:bg-teal/[.14]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm rounded-lg",
  md: "h-11 px-6 text-[15px] rounded-xl",
  lg: "h-[52px] px-7 text-base rounded-2xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap transition-[filter,background,border-color] disabled:cursor-not-allowed disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
