/* eslint-disable @next/next/no-img-element */
"use client";
import { Cross, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isActive, setActive] = useState(false);
  return (
    <div className="relative z-10">
      {isActive && (
        <div onClick={() => setActive(!isActive)} className="w-full h-screen bg-black/40 fixed">
          <nav className="flex z-50 justify-around items-center w-full h-28 bg-white text-black shadow-2xl transition ">
            <button onClick={() => setActive(!isActive)}>
              <X size={30}/>
            </button>
            <div className="flex gap-2 font-bold">
              <Link href={""}>Home</Link>
              <Link href={""}>Shop</Link>
              <Link href={""}>About</Link>
              <Link href={""}>Contact</Link>
            </div>
          </nav>
        </div>
      )}
      <header className="flex py-5 px-3 fixed w-full">
        <div className="flex justify-center items-center w-full relative ">
          <button
            onClick={() => setActive(!isActive)}
            disabled={isActive}
            className="absolute left-0"
          >
            <MenuIcon />
          </button>
          <img src="/images/logo.svg" alt="Room Home Page" />
        </div>
      </header>
    </div>
  );
}
