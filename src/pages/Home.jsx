import React from 'react';
import styled, { keyframes } from "styled-components";
import Navbar from '../components/Navbar';
import background from '../images/background.jpeg';
import { AiOutlineArrowDown } from "react-icons/ai";
import Content from '../components/Content';

const moving = keyframes`
  0% {
    transform: translateY(0em);
  color: rgb(226, 234, 255, 0.8);
  };

  100% {
    transform: translateY(0.3em);
  color: rgb(226, 234, 255, 1);
  };
`;

const BackgroudImage = styled.div`
  position: fixed;
  z-index: -1;
  background-size: cover;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(41, 41, 41, 0)),
  url(${background});
`;

const Main = styled.main`
* {
  font-family: 'Poppins', sans-serif;
};

.title-container {
  /* backdrop-filter: blur(0.25em); */
  backdrop-filter: blur(1em);
  background-color: rgba(150, 150, 150, 0.0);
  border: 0.12em solid rgba(255, 255, 255, 0.15);
  /* border-radius: 0.3em; */
  border-radius: 50%/100em;
  display: flex;
  justify-content: center;
  width: 35em;
  box-shadow: 0em 0em 2em 1em rgba(0, 0, 0, 0.2);
  margin: 13.5em auto;
  color: rgb(226, 234, 255, 0.8);
};

.firstName {
  margin-right: 1.25em;
  margin-top: -0.3em;
  font-size: 5rem;
  font-weight: 200;
};

.lastName {
  margin-right: -1.25em;
  font-size: 3rem;
  font-weight: 100;
  margin-top: -0.8em;
  margin-bottom: 0.5em;
};

.more-container {
  flex-direction: column;
  align-items: center;
  width: 5em;
  height: 4em;
  font-weight: 600;
  border-radius: 5em 5em 50em 50em;
  margin-top: 15em;
  margin-bottom: 4em;
  text-decoration: none;
};

.name-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
};

.mustache {
  font-size: 12em;
  font-weight: 300;
};

.down-icon {
  animation: ${moving} 1s alternate infinite;
};

@media only screen and (max-width: 768px) {
  .title-container {
  backdrop-filter: blur(1em);
  background-color: rgba(150, 150, 150, 0.0);
  border: 0.12em solid rgba(255, 255, 255, 0.15);
  border-radius: 50%/100em;
  display: flex;
  justify-content: center;
  width: 20em;
  box-shadow: 0em 0em 2em 1em rgba(0, 0, 0, 0.2);
  margin: 13.5em auto;
  color: rgb(226, 234, 255, 0.8);
};

.firstName {
  margin-right: 1.25em;
  margin-top: -0.3em;
  font-size: 2rem;
  font-weight: 200;
};

.lastName {
  margin-right: -1.25em;
  font-size: 1rem;
  font-weight: 100;
  margin-top: -0.8em;
  margin-bottom: 0.5em;
};

.mustache {
  font-size: 7em;
  font-weight: 300;
};

.sub-title {
  font-size: 0.5em;
}
};

`;



export default function Home() {
  return (
    <Main>
      <BackgroudImage />
      <Navbar />
      <div className="title-container">
        <p className="mustache">{"{"}</p>
        <div className="name-container">
          <p className="firstName">Victor</p>
          <h1 className="lastName">Schlichting</h1>
        <p className="sub-title">A Full Stack developer under construction</p>
        </div>
        <p className="mustache">{"}"}</p>
      </div>
      <a  href="#projects" className="title-container more-container">
        <p>More</p>
        <AiOutlineArrowDown className="down-icon" />
      </a>
      <Content />
    </Main>
  )
}
