import * as React from "react"
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui"

import "./button.scss";
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border font-medium transition-all outline-none  active:translate-y-px disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        link: "text-primary underline-offset-4 hover:underline",
        primary:"text-white bg-blue-700 hover:bg-blue-500 dark:hover:bg-blue-600 primary:hover:bg-blue-200 primary:bg-blue-100 primary:text-blue-700 border-transparent",
        "vui-primary":"btn-primary"
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xl: "h-17 rounded-xl px-6 gap-4 rounded-xl text-xl max-xl:h-16 max-xl:rounded-lg max-xl:px-5 max-xl:gap-3.5 max-xl:text-lg max-md:h-14 max-md:rounded-md max-md:text-base max-md:px-4 max-md:gap-3",
        "vui-xl":"btn-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
