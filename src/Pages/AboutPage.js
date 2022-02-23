import React from "react";
import styled from "styled-components";
import ImageSection from "../components/ImageSection";
import ServiceSection from "../components/ServiceSection";
import Title from "../components/Title";
import { MainLayout } from "../styles/Layouts";

export default function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
        <ServiceSection />
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;
