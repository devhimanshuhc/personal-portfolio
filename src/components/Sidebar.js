import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

export default function Sidebar({ navToggle }) {
  return (
    <SidebarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
      <Navigation />
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  z-index: 1;
  overflow: hidden;
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
  }
  @media screen and (max-width: 347px) {
    height: 100;
  }
`;
