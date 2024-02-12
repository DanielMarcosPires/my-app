import React, { ComponentProps } from "react";
type SlideDescriptionProps = ComponentProps<"div">
export default function SlideDescription({children, ...props}: SlideDescriptionProps) {
  return <div {...props}>{children}</div>;
}
