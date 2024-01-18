"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="fixed w-full z-50 bg-transparent backdrop-blur-[2px]">
      <div className="container mx-auto px-3 md:px-5 xl:px-0">
        <div className="hidden sm:flex justify-between items-center py-3">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/assets/s-main.svg"
                alt="down arrow"
                height={37}
                width={25}
              />
              <div className="pl-1.5">
                <div className="text-lg font-semibold leading-5">
                  Satyam Sagar
                </div>
                <div className="text-xs font-light leading-3">
                  Frontend Developer
                </div>
              </div>
            </div>
          </Link>
          <div>
            <nav className="bg-[#222] p-1 shadow-[1px_1px_7px_rgba(0,0,0,.16)] rounded-full">
              <ul className="flex items-center">
                <li
                  className={`font-medium text-base px-6 py-1 rounded-full ${
                    pathname == "/" ? "bg-white" : "text-white"
                  }`}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`font-medium text-base px-6 py-1 rounded-full ${
                    pathname == "/projects" ? "bg-white" : "text-white"
                  }`}
                >
                  <Link href="/projects">Modern Marvels</Link>
                </li>
                <li
                  className={`font-medium text-base px-6 py-1 rounded-full ${
                    pathname == "/wp-projects" ? "bg-white" : "text-white"
                  }`}
                >
                  <Link href="/wp-projects">WP Marvels</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="bg-black rounded-2xl">
            <Link href="#" className="flex items-center py-1.5 px-3 xl:px-5  gap-1">
              <Image
                src="/assets/document-white.svg"
                alt="down arrow"
                height={32}
                width={36}
              />
              <div className="text-white text-base font-medium">Resume</div>
            </Link>
          </div>
        </div>
        <div className="py-3 sm:hidden ">
          <div className="flex justify-between items-center">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/assets/s-main.svg"
                  alt="down arrow"
                  height={37}
                  width={25}
                />
                <div className="pl-1.5">
                  <div className="text-lg font-semibold leading-5">
                    Satyam Sagar
                  </div>
                  <div className="text-xs font-light leading-3">
                    Frontend Developer
                  </div>
                </div>
              </div>
            </Link>
            <div className="bg-black rounded-2xl">
              <Link href="#" className="flex items-center py-1 px-3  gap-1">
                <Image
                  src="/assets/document-white.svg"
                  alt="down arrow"
                  height={28}
                  width={28}
                />
                <div className="text-white text-base font-medium">Resume</div>
              </Link>
            </div>
          </div>
          <div className="pt-2">
            <nav className="bg-[#222] p-1 shadow-[1px_1px_7px_rgba(0,0,0,.16)] rounded-full">
              <ul className="flex items-center justify-between">
                <li
                  className={`font-medium text-sm px-2 py-1 rounded-full ${
                    pathname == "/" ? "bg-white" : "text-white"
                  }`}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`font-medium text-sm px-2 py-1 rounded-full ${
                    pathname == "/projects" ? "bg-white" : "text-white"
                  }`}
                >
                  <Link href="/projects">Modern Marvels</Link>
                </li>
                <li
                  className={`font-medium text-sm px-2 py-1 rounded-full ${
                    pathname == "/wp-projects" ? "bg-white" : "text-white"
                  }`}
                >
                  <Link href="/wp-projects">WP Marvels</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
