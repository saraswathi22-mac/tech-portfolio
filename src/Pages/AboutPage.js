import React from "react";
import styled from "styled-components";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from "@material-ui/icons/GitHub";
import Particle from "../Components/Particle";

function AboutPage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>M A Saraswathi</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil
          voluptates ea dolore vel repellat? Quia tenetur non quam
          exercitationem. Lorem ipsum dolor sit amet.
        </p>
        <div className="icons">
          <a href="https://codepen.io/pen/" className="icon i-facebook">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/saraswathi22-mac" target="_blank" rel="noreferrer" className="icon i-github">
            <GithubIcon />
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
        transition: all 0.4s ease-in-out;
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

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
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

export default AboutPage;
