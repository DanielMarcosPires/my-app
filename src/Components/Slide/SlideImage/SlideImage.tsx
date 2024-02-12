/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { ComponentProps } from "react";
interface SlideImage extends ComponentProps<"img">{}
import 'swiper/css';
export default function SlideImage({src}:SlideImage) {
  async function fileImages(){
    try {
      return axios.get("/images/mobile-image-hero-1.jpg")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className={`relative z-0 bg-cover bg-bottom bg-no-repeat`}>
      <img className="w-screen" src={src} alt="banner" />
    </div>
  );
}
