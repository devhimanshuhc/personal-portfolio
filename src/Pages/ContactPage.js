import React, { useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactItems from "../components/ContactItems";
import { TabTitle } from "../utils/GeneralFunctions";

export default function ContactPage(props) {
  TabTitle("Contact-Himanshu Chauhan");
  const call = <CallIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;


  

  return (
    <div>
      <MainLayout>
        <Title title={"Contact"} span={"Contact"} />
        <ContactPageStyled>
          <InnerLayout className={"contact-section"}>
            
            <div
              className="right-content"
              style={{ color: props.theme === "light-theme" ? "" : "#a3a3a3" }}
            >
              <ContactItems
                title={"Phone"}
                icon={call}
                contact={"+91 85338 60335"}
              />
              <ContactItems
                title={"Email"}
                icon={email}
                contact={"devhimanshuhc@gmail.com"}
              />
              <ContactItems
                title={"Location"}
                icon={location}
                contact={"Dehradun, Uttarakhand, India"}
              />
            </div>
          </InnerLayout>
        </ContactPageStyled>
      </MainLayout>
    </div>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 987px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);

      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      max-width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }

      @media screen and (max-width: 445px) {
        max-width: 85%;
      }

      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
      .f-button {
        margin-bottom: 3rem;
      }
    }
  }
`;
