import React from "react";
import ProjectCard from "./ProjectCard";
import { info } from "../../info/Info";
import { Container } from "./styled";

const Portfolio = () => {
  return (
    <Container>
      <a>
        <p
          style={{
            fontSize: "45px",
            fontStyle: "-moz-initial",
            fontWeight: "bold",
          }}
        >
          My Projects
        </p>
        <div
          style={{
            marginTop: 5,
            height: "4px",
            width: "21%",
            backgroundColor: info.baseColor,
            borderRadius: 55,
          }}
        />
      </a>
      <div style={{ height: "50px" }} />
      {info.projectsList.map((project, index) => (
        <div
          key={index}
          style={{
            marginTop: index === 0 ? 0 : 60,
          }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </Container>
  );
};

export default Portfolio;
