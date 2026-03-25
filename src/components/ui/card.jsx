import * as React from "react"

import { cn } from "@/lib/utils"

import "./card.scss";

function Card({
  className,
  size = "default",
  vui = false,
  ...props
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        vui 
        ? "flex flex-col gap-6 rounded-4xl bg-white border border-gray-300 card"
        :"flex flex-col gap-6 rounded-4xl bg-white border border-gray-300 py-12 px-10 max-xl:py-11 max-xl:px-9 max-md:py-10 max-md:px-8 dark:bg-gray-700 dark:border-slate-900 primary:bg-blue-700 primary:border-blue-800",
        className
      )}
      {...props} />
  );
}

function CardHeader({
    className,
    vui = false,
    ...props
  }) {
    return (
      <div
        data-slot="card-header"
        className={cn(
          vui
          ? "flex flex-col gap-4"
          : "flex flex-row flex-wrap items-center justify-between gap-3 ",
          className
        )}
        {...props} />
    );
  }

function CardTitle({
  className,
  vui = false,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        vui
        ? "text-heading-3 text-center font-light card-title"
        : "text-4xl text-center font-light text-black dark:text-white primary:text-white max-xl:text-3xl max-md:text-2xl",
        className
      )}
      {...props} />
  );
}

function CardDescription({
  className,
  vui = false,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        vui
        ? "text-body-base text-center card-description"
        : "text-base text-center text-slate-700 font-light dark:text-blue-50 primary:text-blue-50 max-md:text-sm", className)}
      {...props} />
  );
}

function CardAction({
  className,
  vui = false,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props} />
  );
}

function CardContent({
  className,
  form = false,
  ...props
}) {
  const Comp = form ? "form" : "div";

  return (
    <Comp
      data-slot="card-content"
      className={cn("flex flex-col gap-6", className)}
      {...props} />
  );
}

function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/card:p-3",
        className
      )}
      {...props} />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
