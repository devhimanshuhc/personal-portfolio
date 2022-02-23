import React from "react";
import styled from "styled-components";

export default function SmallTitles({ icon, title }) {
  return (
    <SmallTitlesStyled>
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitlesStyled>
  );
}

const SmallTitlesStyled = styled.div`
  display: flex;
  align-items: center;

  p {
    padding-right: 1rem;
    svg{
    font-size: 2.1rem;

    }
  }

  h3 {
    color: var(--white-color);
    font-size: 1.5rem;
  }
`;
