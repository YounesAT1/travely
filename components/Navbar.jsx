"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navLinks = NAV_LINKS.map((link) => (
    <Link
      href={link.href}
      key={link.key}
      className="regular-20 text-gray-50 flexCenter cursor-pointer Nav_links"
    >
      {link.label}
    </Link>
  ));

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/Pictures/logo.svg" alt="logo" width={150} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">{navLinks}</ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Log in"
          icon="/Pictures/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <div
        className={`mobile-menu gap-8 justify-evenly ${
          mobileMenuOpen ? "open" : ""
        }`}
      >
        {navLinks}

        <div className="w-80%">
          <Button
            type="button"
            title="Log in"
            icon="/Pictures/user.svg"
            variant="btn_dark_green"
          />
        </div>
      </div>

      <Image
        src="/Pictures/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden z-50"
        onClick={toggleMobileMenu}
      />
    </nav>
  );
};

export default Navbar;
