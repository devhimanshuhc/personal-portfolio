import React from "react";
import styled from "styled-components";

export default function ContactItems({ icon, title, contact }, props) {
  return (
    <ContactItemsStyled>
      <div className="left-content">{icon}</div>
      <div className="right-content">
        <h6 style={{color: props.theme === "light-theme" ? "" : "white"}}>{title}</h6>
        <p>{contact}</p>
      </div>
    </ContactItemsStyled>
  );
}
const ContactItemsStyled = styled.div`
  padding: 1rem 2rem;
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;

    svg {
      font-size: 2rem;
    }
  }

  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
    }

    p {
      padding: 0.1rem 0;
    }
  }
`;
