// StyledComponents.js
import styled from "styled-components";

export const Container = styled.div`
  //   display: flex;
  width: 500%; /* Set the width as per your need */
  max-width: 1200px; /* Set a max-width to avoid stretching too much on larger screens */
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full viewport height */
`;

export const AppContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: white;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fbe8e8;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const InfoItem = styled.div`
  background-color: ${(props) => props.bgColor || "#ccc"};
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#aaa"};
  }
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin-bottom: 20px;
  color: gray;
`;

export const TagsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  background-color: ${(props) => props.bgColor || "#ccc"};
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#aaa"};
  }
`;

export const MyProject = styled.div`
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;

  &:hover {
    color: #007aff;
  }
`;

export const Arrow = styled.span`
  margin-left: 5px;
  font-size: 18px;
`;
