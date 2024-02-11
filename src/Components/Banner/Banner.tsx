import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-wrap">
      <div className="relative z-0 bg-[url('/images/mobile-image-hero-1.jpg')] bg-cover bg-bottom bg-no-repeat h-[360px] w-full">
        <div className="absolute right-0 bottom-0 bg-black flex justify-center items-center">
          <button className="hover:bg-white hover:text-black p-5">
            <ChevronLeft />
          </button>
          <button className="hover:bg-white hover:text-black p-5">
            <ChevronRight />
          </button>
        </div>
      </div>
      <div className="p-12">
        <h1 className="text-3xl">Discover innovative ways to decorate</h1>
        <p className="my-5">
            We provide unmathced quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflecton of you and what you love.
        </p>
        <Link className="uppercase text-black flex gap-2 text-2xl justify-end" href={""}>shop now <ArrowRight /></Link>
      </div>
    </div>
  );
}
