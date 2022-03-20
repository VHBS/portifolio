import React from 'react';
import styled, { keyframes } from "styled-components";
import Navbar from '../components/Navbar';
import background from '../images/background.jpeg';
import { AiOutlineArrowDown } from "react-icons/ai";
import Content from '../components/Content';
import portifolio from '../images/portifolio.png';
import leftBar from '../images/leftBar.png'

const moving = keyframes`
  0% {
    transform: translateY(0em);
    color: rgb(226, 234, 255, 0.8);
  };

  100% {
    transform: translateY(0.5em);
    color: rgb(226, 234, 255, 1);
  };
`;

const BackgroudImage = styled.div`
  position: fixed;
  z-index: -1;
  background-size: cover;
  width: 100%;
  min-width: 350px;
  height: 100%;
  background-repeat:no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgb(41, 41, 41, 0.8)),
  url(${background});

`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-width: 350px;

  * {
    font-family: 'Poppins', sans-serif;
  };

  .first-page {
    height: 100vh;
    min-height: 630px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title-container {
    background-color: rgba(150, 150, 150, 0.0);
    backdrop-filter: blur(2em);
    border: 0.12em solid rgba(255, 255, 255, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85vw;
    min-width: 745px;
    max-width: 1280px;
    box-shadow: 0em 0em 2em 1em rgba(0, 0, 0, 0.2);
    color: rgb(226, 234, 255, 0.8);
    padding-block: 2em;
  };

  .firstName {
    margin-right: 1.25em;
    margin-top: -0.3em;
    font-size: 10vw;
    font-weight: 200;
  };

  .lastName {
    margin-right: -1.25em;
    font-size: 6vw;
    font-weight: 100;
    margin-top: -0.8em;
    margin-bottom: 0.5em;
  };

  .myImageContainer {
    display: flex;
    align-items: end;
  }

  .myImage {
    height: 25em;
    min-width: 246px;
    filter: drop-shadow(5px 0 0 #00000055);
  }

  .separateBar{
    height: 27em;
    margin-bottom: -1em;
  }

  .more-container {
    backdrop-filter: blur(2em);
    background-color: rgba(150, 150, 150, 0.0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 5em;
    height: 4em;
    font-weight: 600;
    border-radius: 5em 5em 50em 50em;
    text-decoration: none;
    margin-top: -4.3em;
    margin-inline: auto;
    border: 0.12em solid rgba(255, 255, 255, 0.5);
    text-decoration: none;
    color: rgb(226, 234, 255, 0.8);
  };

  .name-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  };

  .sub-title {
    font-size: 1em;
  }

  .down-icon {
    animation: ${moving} 1s alternate infinite;
  };

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    min-width: 350px;

    .first-page {
      min-height: 800px;
    }
    .title-container {
      border: 0;
      border-block: 0.05em solid rgba(255, 255, 255, 0.15);
      flex-direction: column-reverse;
      width: 100%;
      min-width: 350px;
    };

    .firstName {
      margin-right: 1.25em;
      margin-top: -0.3em;
      font-size: 4rem;
      font-weight: 200;
    };

    .lastName {
      margin-right: -1.25em;
      font-size: 2.4rem;
      font-weight: 100;
      margin-top: -0.8em;
      margin-bottom: 0.5em;
    };

    .myImageContainer {
      padding-bottom: 2em;
      display: flex;
      align-items: end;
      width: 45vw;
      min-width: 300px;
    }

    .myImage {
      height: auto;
      width: 100%;
      filter: drop-shadow(5px 0 0 #00000055);
    }

    .separateBar{
      height: 22em;
    }

    .sub-title {
      font-size: 0.7em;
      padding-bottom: 2em;
    }

    .more-container {
      margin-top: -4.3em;
    };
  };
`;

export default function Home() {
  return (
    <Main>
      <BackgroudImage />
      <Navbar />
      <div className="first-page">
        <div className="title-container">
          <div className="name-container">
            <p className="firstName">Victor</p>
            <h1 className="lastName">Schlichting</h1>
          {/* <p className="sub-title">A Full Stack developer under construction</p> */}
          <p className="sub-title">Desenvolvedor Full Stack em construção</p>
          </div>
          <div className="myImageContainer">
            <img className="separateBar" src={leftBar} alt="separate bar" />
            <img className="myImage" src={portifolio} alt="Victor Hugo" />
          </div>
        </div>
      </div>
      <a href="#sobre-mim" className="more-container">
        <p>Mais</p>
        <AiOutlineArrowDown className="down-icon" />
      </a>
      <Content />
    </Main>
  )
}
