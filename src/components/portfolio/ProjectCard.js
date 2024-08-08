// ProjectCard.js
import React from "react";
import {
  AppContainer,
  InfoSection,
  InfoItem,
  Title,
  Description,
  TagsSection,
  Tag,
  ProjectLink,
  Arrow,
} from "./styled";

const ProjectCard = ({ project }) => {
  const darkMode = localStorage.getItem("darkMode");
  console.log("darkModedarkMode", darkMode);
  return (
    <AppContainer
      href={project.link}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      <InfoSection>
        <InfoItem bgColor="#00cc99" hoverColor="#00b386">
          App
        </InfoItem>
        <InfoItem bgColor="#00cc99" hoverColor="#00b386">
          Android
        </InfoItem>
        <InfoItem bgColor="#007aff" hoverColor="#005bb5">
          iOS
        </InfoItem>
      </InfoSection>

      <Title style={{ color: "black" }}>{project.title}</Title>
      <Description>{project.description}</Description>

      <TagsSection>
        {project.tags.map((tag, index) => (
          <Tag key={index} bgColor={tag.bgColor} hoverColor={tag.hoverColor}>
            {tag.name}
          </Tag>
        ))}
      </TagsSection>

      <ProjectLink style={{ color: "black" }} href={project.link}>
        Check Project <Arrow>➔</Arrow>
      </ProjectLink>
    </AppContainer>
  );
};

export default ProjectCard;
