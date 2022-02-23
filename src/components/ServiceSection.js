import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import ServiceCard from "./ServiceCard";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";

export default function ServiceSection(props) {
  return (
    <InnerLayout>
      <ServiceSectionStyled>
        <Title title={"Services"} span={"Services"} />
        <div
          className="services"
          style={{ color: props.theme === "light-theme" ? "" : "#a3a3a3" }}
        >
          <ServiceCard
            image={design}
            title={"Web Design"}
            paragraph={
              "I like to code things from scratch, and enjoy bringing ideas to life in the browser."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={"AI"}
              paragraph={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              }
            />
          </div>
        </div>
      </ServiceSectionStyled>
    </InnerLayout>
  );
}

const ServiceSectionStyled = styled.section`
  .services {
    margin-top: 5rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
