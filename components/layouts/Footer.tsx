import React from "react";
import Link from "next/link";
// import Logo from "../assets/images/logowhite.png";
// import SRMlogo from "../assets/images/SRMlogo.png";
import Image from "next/image";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  return (
    <div
      className={`h-fit ${
        router.pathname === "/register" ? "hidden" : "block"
      }`}
    >
      <footer className="w-full font-montserrat text-white bg-[url('https://res.cloudinary.com/dwncfhjpd/image/upload/v1679560555/texus/footer_sbtbuj.webp')] bg-top bg-cover bg-no-repeat">
        <div className="mx-auto max-w-screen-xl py-8 px-4">
          <div className="md:flex md:justify-between">
            <div className="mb- md:mb-0 w-full flex justify-center md:justify-start">
              <Link href="#" className="flex items-center">
                <Image
                  src={"/assets/cc-logo.png"}
                  alt="logo"
                  width={150}
                  height={100}
                />
                <Image
                  src={"/assets/cc-logo.png"}
                  alt="logo"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            <div className="grid grid-cols-1 w-full text-center gap-5 items-center md:grid-cols-2 lg:grid-cols-5">
              <Link
                href="/#events"
                prefetch={false}
                className="text-sm font-semibold"
              >
                Events
              </Link>
              <Link
                href="/about"
                prefetch={false}
                className="text-sm font-semibold"
              >
                About
              </Link>
              <Link
                href="/gallery"
                prefetch={false}
                className="text-sm font-semibold"
              >
                Gallery
              </Link>
              <Link
                href="/sponsors"
                prefetch={false}
                className="text-sm font-semibold"
              >
                Sponsors
              </Link>
              <Link
                href="/contact"
                prefetch={false}
                className="text-sm font-semibold"
              >
                Contact
              </Link>
            </div>
          </div>
          <hr className="my-6 border-b border-slate-200/20 sm:mx-auto" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
              <Link
                href="/privacy-policy"
                prefetch={false}
                className="hover:text-white md:mb-0 text-[12px] text-[#777a85]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                prefetch={false}
                className="hover:text-white md:mb-0 text-[12px] text-[#777a85]"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/code-of-conduct"
                prefetch={false}
                className="hover:text-white md:mb-0 text-[12px] text-[#777a85]"
              >
                Code of Conduct
              </Link>
              <p className=" md:mb-0 text-[12px] text-[#777a85]">
                Copyright &copy; {new Date().getFullYear()} TEXUS
              </p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Link
                href="https://www.instagram.com/texus_2k23/"
                prefetch={false}
                target="_blank"
                className="hover:text-gray-300 flex space-x-2 justify-center items-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  // ariaHidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm">@texus_2k23</p>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

// bg-gradient-to-r from-[#FFEA2C] via-[#179EBB] to-black