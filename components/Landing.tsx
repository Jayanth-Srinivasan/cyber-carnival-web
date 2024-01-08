import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

function Landing() {
  return (
    <main className=" bg-[url('/assets/hero-bg.png')] font-mont  w-full h-screen">
      <div className="w-full h-full p-4 md:px-16 py-[50px] md:py-[80px] lg:max-w-5xl lg:mx-auto text-white flex gap-6 justify-center items-center flex-col text-center">
        <div className="flex flex-col gap-4 md:gap-8 items-center">
          {/* <Image src={"/assets/cc-logo.png"} width={100} height={100} alt="leo-relocations-logo" className="h-25 w-24 max-w-full" /> */}
          <h1 className="text-3xl leading-tight md:text-6xl font-bold">
            Tech Wonders,Virtual Marvels Awaits - <br />
            <span className="text-green-400">Cyber Carnival 2K24</span>
          </h1>
          <p className="md:text-lg text-md font-medium font-mono">
            Revolutionize Your Cyber Carnival Experience: Powering Up the Fun,<br/>
            Standing Out in the Virtual Crowd!
          </p>
        </div>
        <div className="">
          <Button
            asChild
            className="h-14 w-full rounded-lg bg-green-400 text-black font-semibold text-lg py-5 px-16 transition-all duration-300 hover:bg-green-600 hover:scale-105  md:w-fit"
          >
            <Link href={"/"} target={"_self"}>
              Get Your Tickets
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Landing;
