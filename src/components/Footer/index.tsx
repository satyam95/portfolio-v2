import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black">
        <div className="container mx-auto px-3 md:px-5 xl:px-0">
          <div className="py-28">
            <h2 className="text-white text-4xl font-semibold">
              Let&apos;s Connect!
            </h2>
            <p className="text-white text-2xl font-light pt-4 max-w-md">
              We over me. Problem solving with positive impact.
            </p>
            <div className="pt-10 flex items-start gap-8">
              <Link
                className="text-white text-xl sm:text-2xl font-bold border-[#707070] border-b"
                href="mailto:satyamsagar30@gmail.com"
              >
                satyamsagar30@gmail.com
              </Link>
            </div>
            <div className="pt-10 flex items-start gap-8">
              <Link
                className="text-white text-2xl font-bold border-[#707070] border-b"
                href="https://www.linkedin.com/in/satyamsagar95/"
              >
                LinkedIn
              </Link>
              <Link
                className="text-white text-2xl font-bold border-[#707070] border-b"
                href="https://github.com/satyam95"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
