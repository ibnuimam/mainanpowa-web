import type { ComponentProps } from "react";

import { cn } from "@/libs/utils";

const TYPE = {
  primary: "bg-accent",
  secondary: "bg-accent-secondary",
};

interface Props extends Pick<ComponentProps<"div">, "className"> {
  type?: keyof typeof TYPE;
}

const BackgroundComp = ({ className, type }: Props) => {
  return (
    <div
      className={cn(
        "absolute h-32.5 w-297.5 rounded-full",
        "left-21 -rotate-32",
        "opacity-30 blur-[48px]",
        type ? TYPE[type] : TYPE["primary"],
        className,
      )}
    ></div>
  );
};

export default BackgroundComp;
