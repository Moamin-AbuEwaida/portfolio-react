import React from "react";
import { MdOutlineLocationOn, MdPhoneIphone } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const links = [
  {
    id: 1,
    child: (
      <>
        <FaLinkedin size={25} />
      </>
    ),
    href: "https://www.linkedin.com/in/moaminsalamah/",
  },
  {
    id: 2,
    child: (
      <>
        <FaGithub size={25} />
      </>
    ),
    href: "https://github.com/Moamin-AbuEwaida",
  },
  {
    id: 3,
    child: (
      <>
        <HiOutlineMail size={25} />
      </>
    ),
    href: "mailto:maomin.salamah@gmail.com",
  },
  {
    id: 4,
    child: (
      <>
        <BsFillPersonLinesFill size={25} />
      </>
    ),
    href: "/Moamin-cv-FS.pdf",
    download: true,
  },
];

const Footer = () => {
  return (
    <div className="h-20 w-full bg-gradient-to-b from-gray-800 to-black border-t-[.5px] border-gray-400 pt-2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-between ml-4 md:text-normal text-sm text-gray-400">
          <div className="flex flex-row items-center">
            <span className="mr-1">
              <MdOutlineLocationOn />
            </span>
            Belgium-Brussels
          </div>
          <div className="flex flex-row items-center">
            <span className="mr-1">
              <MdPhoneIphone />
            </span>
            +32 497.08.61.23
          </div>
          <div className="flex flex-row items-center">
            <span className="mr-1">
              <FaLanguage />
            </span>
            Arabic and English
          </div>
        </div>
        <div className="mr-4 md:text-normal text-sm">
          <p className="text-gray-400 text-center mb-2">Social Links</p>
          <ul className="flex flex-row">
            {links.map(({ id, child, href, download }) => (
              <li key={id} className="mx-1">
                <a
                  href={href}
                  className="text-gray-400"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
