import * as React from "react"
import { cva } from "class-variance-authority"
import "./input.scss";
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "w-full min-w-0 rounded-lg border border-input font-light bg-transparent transition-colors outline-none placeholder:text-gray-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50  dark:text-gray-400 dark:bg-gray-800 dark:placeholder:text-gray-400 primary:border-transparent primary:bg-white hover:border-blue-500",
  {
    variants: {
      size: {
        default: "px-2.5 py-1 text-base h-8 ",
        xl: "h-17 rounded-xl py-2 px-6 text-xl max-xl:h-16 max-xl:rounded-lg max-xl:px-5 max-xl:text-lg max-md:h-15 max-md:rounded-md max-md:py-1 max-md:px-4 max-md:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

function Input({
  className,
  type,
  size = "default",
  vui = false,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        vui
        ? `input input-xl`
        : inputVariants({ size }),
        className
      )}
      {...props} />
  );
}

export { Input }
