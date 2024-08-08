import React, { useRef, useState } from "react";
import Style from "./Navbar.module.scss";
import Toggler from "./home/Toggler";
import { HashLink as Link } from "react-router-hash-link";
import { Box } from "@mui/material";
import { info } from "../info/Info";
import { singlePage } from "../info/Info";
import Pdf from "../assets/Naeem.pdf";

const links = [
  {
    name: "Naeem R.",
    to: "",
    active: "home",
  },
  {
    name: "About Me",
    to: "about",
    active: "about",
  },
  {
    name: "Portfolio",
    to: "portfolio",
    active: "portfolio",
  },
  {
    name: "Resume",
    to: "resume",
    active: "resume",
    url: "/resume",
  },
];

// This function is used to create a scroll offset to compensate for the navbar
// when you click on the nav buttons to scroll down.
const scrollWidthOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

export default function Navbar({ darkMode, handleClick, active, setActive }) {
  return (
    <Box
      component={"nav"}
      width={"100%"}
      style={{ marginTop: "2%" }}
      position={singlePage ? "fixed" : "relative"}
      className={darkMode ? Style.dark : Style.light}
    >
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
        textTransform={"capitalize"}
        fontSize={"1rem"}
      >
        {links.map((link, index) => (
          <Box
            key={index}
            component={"li"}
            className={link.active === active && !link.type && Style.active}
            sx={{ borderImageSource: info.gradient }}
          >
            {link.url ? (
              <a href={Pdf} without rel="noopener noreferrer" target="_blank">
                <p style={{ padding: "0.5rem 0" }}>{link.name} </p>
              </a>
            ) : (
              <Link
                to={singlePage ? `#${link.to}` : `/${link.to}`}
                scroll={(el) => scrollWidthOffset(el)}
                smooth
                onClick={() => setActive(link.active)}
                className={Style.link}
              >
                <p style={{ padding: "0.5rem 0" }}>{link.name}</p>
              </Link>
            )}
          </Box>
        ))}
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
