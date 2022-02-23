import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from '@mui/icons-material/Language';
import styled from "styled-components";

export default function Menu({ menuItem }) {
  return (
    <MenuStyled>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
              </div>
              <ul>
                <li className="list list1">
                  <a href={item.link1}>
                    <GitHubIcon />
                  </a>
                </li>
                <li className="list list2">
                  <a href={item.link2}>
                    <LanguageIcon />
                  </a>
                </li>
              </ul>
            </div>
            <h6>{item.title}</h6>
            <p>{item.text}</p>
          </div>
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .grid-item {
    text-align: center;
    .portfolio-content {
      display: block;
      position: relative;
      overflow: hidden;
      h6 {
        font-size: 1.5rem;
      }
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
      ul {
        display: block;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.4rem;
      }

      .list {
        margin: 0 2rem;
        svg {
          font-size: 2.2rem;
        }
      }

      .list1:hover {
        color: #6e5494;
        transition: all 0.4s ease-in-out;
        transform: scale(1.07);
      }
      .list2:hover {
        color: #345cba;
        transition: all 0.3s ease-in-out;
        transform: scale(1.07);
      }

      .portfolio-image {
        &::before {
          content: "";
          position: absolute;
          left: 2%;
          top: 4%;
          height: 0;
          width: 0;
          transition: all 0.4s ease-in-out;
        }
      }
      .portfolio-image:hover {
        transition: all 0.4s ease-in-out;
        transform: scale(1.07);
      }
    }
  }
`;
