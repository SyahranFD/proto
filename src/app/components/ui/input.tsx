import * as React from "react";

import { cn } from "@/app/lib/utils";
import { IconType } from "react-icons/lib";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  rightIcon?: JSX.Element;
  leftIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, rightIcon, leftIcon, type, ...props }, ref) => {
    return (
      <div
        className={
          "px-3 border-2 focus-within:border-primary border-input rounded-lg w-full flex items-center justify-between"
        }
      >
        {leftIcon}

        <input
          type={type}
          className={cn(
            "flex h-10  w-full  bg-background  py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
