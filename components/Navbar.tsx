"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "./../constants/index";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 text-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      {menuOpen && (
        <div className="flex flex-col absolute top-14 right-0 left-0 p-6 max-h-[480px] w-[95%] m-auto lg:hidden bg-green-200 rounded-3xl">
          <ul className="flex flex-col w-full h-full gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 text-center w-full cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>

          <div className="block m-auto mt-5 w-80">
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
              full
            />
          </div>
        </div>
      )}
      {/* --------------------------------- */}

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
