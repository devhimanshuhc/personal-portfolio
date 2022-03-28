import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { TabTitle } from "../utils/GeneralFunctions"; 

export default function HomePage() {
  
  TabTitle("Home-Himanshu Chauhan");
  return (
    <HomePageStyled>
      
      <div className="typography">
        <h1>
          Hi I'm <span>Himanshu Chauhan</span>
        </h1>
        <p>I design and build user interfaces with HTML/CSS, Javascript and React JS</p>
        <div className="icons">
          <a
            href="https://instagram.com/hiimanshuh"
            className="icon i-instagram"
          >
            <InstagramIcon />
          </a>
          <a href="https://github.com/devhimanshuhc" className="icon i-github">
            <GitHubIcon />
          </a>
          <a href="https://twitter.com/hiimanshuh" className="icon i-twitter">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-instagram {
        &:hover {
          color: #f09433;
          border: 2px solid #f09433;
        }
      }

      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;
