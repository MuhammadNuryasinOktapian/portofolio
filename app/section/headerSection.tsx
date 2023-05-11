"use client";
import React, { useCallback, useEffect, useState } from "react";
export default function HeaderSection() {
  const [mounted, setMounted] = useState(false);

  const [menu, setMenu] = useState(false);
  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  const navLink = [
    {
      menu: "About",
    },
    {
      menu: "Experiences",
    },
    {
      menu: "Skills",
    },
    {
      menu: "Education",
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const position = window.pageYOffset;
      const threshold = 10;
      setScrolled(position > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div
      className={`top-0 right-0 left-0 z-20 transition-all  p-6 ${
        scrolled
          ? "bg-white/30 shadow-[0px_0px_10px] shadow-black/10 fixed backdrop-blur-lg"
          : "absolute"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-end lg:justify-center lg:items-center">
        <nav
          className={[
            "lg:flex lg:h-auto w-auto z-40",
            menu
              ? "fixed bg-white inset-0 text-accent-1 w-full h-screen flex justify-center text-center"
              : "hidden",
          ].join(" ")}
        >
          <ul className="flex lg:flex-row flex-col lg:gap-[40px] gap-[30px] lg:mt-0 mt-40">
            {navLink?.map((navLink, index) => (
              <li key={index}>
                <a
                  href={"#" + navLink.menu}
                  className="block text-accent-1 hover:text-accent-2 text-[16px] font-medium"
                  aria-current="page"
                  onClick={() => setMenu(false)}
                >
                  {navLink.menu}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={toggleMenu}
          className={[
            "w-auto flex items-center justify-center lg:hidden p-2 z-50 text-accent-1",
            menu ? "fixed right-4 top-4" : "",
          ].join(" ")}
        >
          <i className={["fa-solid", menu ? "fa-x" : "fa-bars"].join(" ")}></i>
        </button>
      </div>
    </div>
  );
}
