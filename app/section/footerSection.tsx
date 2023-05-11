"use client";
import Link from "next/link";

export default function FooterSection() {
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
  const socialMedia = [
    {
      icon: "facebook",
      link: "https://www.facebook.com/hidayat.mauludin",
    },
    {
      icon: "instagram",
      link: "https://www.instagram.com/dayatmauluddin/",
    },
    {
      icon: "linkedin",
      link: "https://www.linkedin.com/in/dayat-mauludin-15726b15b/",
    },
  ];
  return (
    <div className="bg-violet-100">
      <div className="max-w-7xl mx-auto flex lg:items-center">
        <div className="flex flex-col justify-between p-20 gap-8 w-full items-center">
          <ul className="flex lg:flex-row flex-col lg:gap-[40px] gap-[30px]">
            {navLink?.map((navLink, index) => (
              <li key={index}>
                <a
                  href={"#"+navLink.menu}
                  className="block text-accent-1 hover:text-acscent-2 text-center text-[16px] font-medium"
                  aria-current="page"
                >
                  {navLink.menu}
                </a>
              </li>
            ))}
          </ul>
          <div className="text-accent-1 text-center text-[14px]">
            © Copyright {new Date().getFullYear()} by M Nuryasin Oktapian
          </div>
        </div>
      </div>
    </div>
  );
}
