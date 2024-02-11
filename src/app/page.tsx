/* eslint-disable @next/next/no-img-element */
import Banner from "@/Components/Banner/Banner";
import { Slide } from "@/Components/Slide";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Slide.Image image="/images/desktop-image-hero-1.jpg">1</Slide.Image>
    </>
  );
}
