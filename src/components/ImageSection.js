import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

export default function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="right-content">
        <h4>
          I am <span>Himanshu Chauhan</span>
        </h4>

        <p className="paragraph">
          I’m a freelance Front-end Developer creating successful websites with
          React JS. I'm a self-taught developer with a passion for computer
          science and programming. In the past, I started with HTML5 & CSS and
          learned JavaScript and I've worked extensively in the Web Development
          space as a freelancer.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Name</p>
            <p>Location</p>
            <p>Service</p>
            <p>Hobbies</p>
          </div>
          <div className="info">
            <p>: Himanshu Chauhan</p>
            <p>: India</p>
            <p>: Web Developer</p>
            <p>: Writing, Photography, Ediiting</p>
          </div>
        </div>

        <PrimaryButton title={`Download Cv`} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 3.2rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
        color: var(--primary-color);
      }
    }

    .paragraph {
      padding: 0.5rem 0;
    }

    .about-info {
      display: flex;
      padding: 1.2rem 0;

      .info-title {
        padding-right: 6rem;

        p {
          font-weight: 400;
        }
      }

      .info-title,
      .info {
        p {
          padding: 0.15rem 0;
        }
      }
    }
  }
`;
