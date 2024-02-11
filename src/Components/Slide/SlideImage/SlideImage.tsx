import React from "react";
interface SlideImage{
    image: string;
    children:React.ReactNode
}
export default function SlideImage({image, children}:SlideImage) {
  return (
    <div className={`relative z-0 bg-[url(${image})] bg-cover bg-bottom bg-no-repeat h-[360px] w-full`}>
        {children}
    </div>
  );
}
