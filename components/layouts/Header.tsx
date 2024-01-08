import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { NAVBAR_NAVIGATION } from "@/constants/navigation";
import Image from "next/image";

function Header() {
  return (
    <nav className="bg-transparent fixed top-0 z-50 w-full">
      <div className="mx-auto z-50 flex w-full p-3 md:px-5 md:py-3 lg:px-[5vw] lg:py-5  max-w-[1440px] items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/assets/cc-logo.png"}
            width={1080}
            height={1920}
            alt="leo-relocations-logo"
            className="h-auto w-20 max-w-full"
          />
          {/* <h1 className="text-2xl leading-none font-mono font-semibold">
            Cyber <br />
            Carnival
          </h1> */}
        </Link>
        <div className="font-normal">
          <ul className="items-center hidden text-center lg:flex lg:gap-4 text-md xl:text-lg">
            {NAVBAR_NAVIGATION.map((link) => (
              <li key={`nav-mobile-link-${link.link}`} className="p-2">
                <Link
                  href={link.link}
                  target={link.target}
                  className="mx-3 cursor-pointer px-3 py-2 transition-all duration-300 text-base font-medium  hover:text-app-red"
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li>
              <Button
                variant={"secondary"}
                asChild
                className="ml-10 rounded-lg border h-12 transition-colors duration-300 ease-in-out text-app-red/80 border-slate-200 bg-transparent py-4 px-6  hover:border-slate-500 hover:bg-[#1e1e1e] hover:shadow-md"
              >
                <Link
                  href={"/"}
                  target={"_self"}
                  className="text-base font-semibold "
                >
                  Get Tickets
                </Link>
              </Button>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger className="py-4 lg:hidden">
              <Menu strokeWidth={2} size={24} />
            </SheetTrigger>
            <SheetContent className="bg-app-grey-dark">
              <SheetHeader>
                <SheetTitle className="text-2xl font-semibold ">
                  Cyber Carnival
                </SheetTitle>
                <SheetDescription>
                  <nav className="font-semibold contents ">
                    <ul className="flex flex-col items-center mx-auto justify-center">
                      {NAVBAR_NAVIGATION.map((link) => (
                        <li
                          key={`nav-mobile-link-${link.link}`}
                          className="p-2"
                        >
                          <Link
                            href={link.link}
                            target={link.target}
                            className="px-2 py-4 transition-all duration-300 text-base font-medium  hover:text-app-red"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Button
                          variant={"secondary"}
                          asChild
                          className="mt-2 rounded-lg border h-12 transition-colors text-app-red duration-300 ease-in-out border-slate-200 bg-transparent py-4 px-6  hover:border-slate-500 hover:bg-[#1e1e1e] hover:shadow-md"
                        >
                          <Link
                            href={"/"}
                            target={"_self"}
                            className="text-base font-semibold text-app-red"
                          >
                            Get Tickets
                          </Link>
                        </Button>
                      </li>
                    </ul>
                  </nav>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Header;
