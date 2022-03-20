import React from 'react';
import styled from "styled-components";
import musicStream from '../images/music_stream/01_music_stream.jpg';
import recipeApp from '../images/recipes/08_recipes.png'
import { ImEye } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";


const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 2em;
  width: 80vw;
  flex-wrap: wrap;

  .card {
    margin-bottom: 5em;
    margin-inline: 2em;
    .horizontal {
      width: 41vw;
      min-width: 400px;
      border-radius: 1em 1em 0 0;
      border: 0.12em solid rgba(255, 255, 255, 0.15);
      border-bottom: 0;
      margin-bottom: -0.42em;
    }

    .vertical {
      width: 15vw;
      min-width: 250px;
      border-radius: 1em 1em 0 0;
      border: 0.12em solid rgba(255, 255, 255, 0.15);
      border-bottom: 0;
      margin-bottom: -0.42em;
    }

    .description {
      height: 7em;
      background-color: rgba(150, 150, 150, 0.15);
      border-radius: 0 0 1em 1em;
      border: 0.12em solid rgba(255, 255, 255, 0.15);
      border-top: 0;
      display: flex;

      h3 {
        backdrop-filter: blur(5px);
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        margin-top: -1.475em;
        text-align: center;
        width: 41vw;
        min-width: 400px;
        z-index: 1;
      }

      .container-icon {
        height: 100%;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        text-decoration: none;
        color: rgb(226, 234, 255, 0.8);

        .icon{
          font-size: 2em;
        }
      }

      .container-icon:hover {
        color: rgb(226, 234, 255, 1);

      }
    }

    .descr-vert {
      h3 {
        width: 15vw;
        min-width: 250px;
      }
    }
  }
`;

export default function ProjectCards() {
  return (
    <Main>
      <div className="card">
        <img className="vertical" src={recipeApp} alt="Preview stream music" />
        <div className="description descr-vert">
          <h3>Recipe App</h3>
          <a className="container-icon" target="_blank" href="https://vhbs-recipes.vercel.app/" rel="noreferrer">
              <ImEye className="icon" />
              <p>Projeto</p>
          </a>
          <a className="container-icon" target="_blank" href="https://github.com/VHBS/portifolio-recipies" rel="noreferrer">
            <AiFillGithub className="icon" />
            <p>Repositório</p>
          </a>
        </div>
      </div>
      <div className="card">
        <img className="horizontal" src={musicStream} alt="Preview stream music" />
        <div className="description">
          <h3>Music Stream</h3>
          <a className="container-icon" target="_blank" href="https://vhbs-music-stream.vercel.app/" rel="noreferrer">
            <ImEye className="icon" />
            <p>Ver Projeto</p>
          </a>
          <a className="container-icon" target="_blank" href="https://github.com/VHBS/portifolio-music-stream" rel="noreferrer">

            <AiFillGithub className="icon" />
            <p>Repositório</p>
          </a>
        </div>
      </div>
    </Main>
  );
}