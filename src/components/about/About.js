import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info, list, praisesList } from "../../info/Info";
import { GoDotFill } from "react-icons/go";

export default function About({ innerRef }) {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p style={{ color: info.baseColor }}>
          Passionate Full-Stack Developer:
        </p>
        <p style={{ marginTop: "0.9rem" }}>{info.bio}</p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p style={{ color: info.baseColor }}>
          Continuous Learning and Innovation:
        </p>
        <p style={{ marginTop: "0.9rem" }}>{info.bio2}</p>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p style={{ fontSize: 35, color: info.baseColor }}>
          Technologies and Skills:
        </p>
        <p style={{ marginTop: "0.9rem" }}>{info.bio3}</p>
        <Box component={"ul"} p={"0.8rem"}>
          {list.map((item, index) => (
            <p
              style={{
                flexDirection: "row",
              }}
            >
              {item.name}
            </p>
          ))}
        </Box>
      </>
    );
  }
  function Praises() {
    return (
      <>
        <p style={{ fontSize: 35, color: info.baseColor }}>
          Professional Praises:
        </p>
        <p style={{ marginTop: "0.9rem" }}>
          Some of my professional praises are listed below. You can also find
          them on my{" "}
          <a
            style={{ color: info.baseColor }}
            href={"https://www.linkedin.com/in/naeem-raza-b420a51b6/"}
          >
            LinkedIn
          </a>{" "}
          profile.
        </p>
        {/* {praisesList.map((item, index) => {
          return (
            <Box
              key={index}
              style={{ marginTop: 50 }}
              component={"img"}
              src={item.image}
            />
          );
        })} */}

        <Box component={"ul"} p={"0.8rem"}>
          {praisesList.map((item, index) => (
            <li
              key={index}
              style={{ marginTop: "5rem", listStyleType: "none" }}
            >
              <a style={{ color: info.baseColor }} href={item.link}>
                {item.author}
              </a>
              <p
                style={{
                  marginTop: "2rem",
                  fontStyle: "italic",
                  opacity: 0.8,
                }}
              >
                {item.recommendation}
              </p>
            </li>
          ))}
        </Box>
      </>
    );
  }

  return (
    <Box
      ref={innerRef}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
      id={"about"}
      style={{ marginTop: "5%" }}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
      <Terminal text={Praises()} />
    </Box>
  );
}
