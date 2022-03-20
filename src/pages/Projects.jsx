import React from 'react'
import Navbar from '../components/Navbar';
import background from '../images/background.jpeg';
import styled from "styled-components";
import ProjectCards from '../components/ProjectCards';

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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  
  * {
    font-family: 'Poppins', sans-serif;
  };

  .project-page {
    height: 100vh;
    min-height: 630px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
  }

  .project-container {
    margin-top: 5em;
    border-block: 0.01em solid rgba(255, 255, 255, 0.25);
    width: 100%;
    background-color: rgba(150, 150, 150, 0.0);
    backdrop-filter: blur(0.2em);
    /* height: 85vh; */
    /* min-height: 700px; */
    color: rgb(226, 234, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0em 0em 2em 1em rgba(0, 0, 0, 0.2);
    
    .title {
      font-weight: 100;
      font-size: 4em;
      font-style: italic;
      text-align: start;
    }
  }

  .project-card {
    color: white;
  }
`;

export default function Projects() {
  return (
    <Main>
      <BackgroudImage />
      <Navbar />
      <div className="project-page">
        <div className="project-container">
            <h1 className="title">Projetos</h1>
          <ProjectCards />
        </div>
      </div>
    </Main>
  )
}
