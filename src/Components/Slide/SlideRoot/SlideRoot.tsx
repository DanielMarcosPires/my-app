import React from "react";
interface SlideRoot{
    children: React.ReactNode;
}
export default function SlideRoot({children}:SlideRoot){
  return <div>{children}</div>;
}
