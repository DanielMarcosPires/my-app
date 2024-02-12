/* eslint-disable @next/next/no-img-element */
import Banner from "@/Components/Banner/Banner";
import { Slide } from "@/Components/Slide";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import 'swiper/css';

export default function Home() {
  return (
    <>
    <Slide.Root>
      <Slide.Image src="/images/mobile-image-hero-1.jpg" />
      <Slide.Description className="flex flex-col gap-2 p-10">
        <h1 className="text-3xl w-full">Discover innovative ways to decorate</h1>
        <p className="font-semibold">
          We provide unmatched quality, comfort, and style for property
          owners across the country.
          Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
        </p>
        <Link className="text-black flex items-center gap-1 text-2xl uppercase tracking-wider" href={""}>shop now <ArrowRight/></Link>
      </Slide.Description>
    </Slide.Root>
    </>
  );
}
