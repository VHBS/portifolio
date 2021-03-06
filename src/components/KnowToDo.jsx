import { FaReact, FaCss3, FaGitAlt } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { SiJest } from "react-icons/si";

import styled from "styled-components";

const KnowContainer = styled.div`
  backdrop-filter: blur(1em);
  text-align: justify;
  box-shadow: 0em 0em 1em 0.5em rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  color: rgb(226, 234, 255, 0.8);
  padding: 2em 10% 1em;
  width: 80%;
  margin: 2em auto 0;

  h1 {
    padding: 0 5% 0 5%;
    font-weight: 100;
    font-size: 4em;
    font-style: italic;
  };

  h3 {
    text-align: center;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  a {
    text-decoration: none;
    color: rgb(226, 234, 255, 0.8);
  }

  .knows {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1.3em;
  };

  .card-kows {
    padding: 1em;
    display: flex;
    h6 {
      padding: 0 0.5em;
    }
  };

  .projects {
    width: 24.5em;
    margin: 1em auto;
    li {
      padding: 0.5em 0;
    }
  }
`;

const htmlRef = "https://developer.mozilla.org/pt-BR/docs/Web/HTML";

const cssRef = "https://developer.mozilla.org/pt-BR/docs/Web/CSS";

const jsRef = "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript";

const reactRef = "https://pt-br.reactjs.org/";

const jestRef = "https://jestjs.io/pt-BR/";

const gitRef = "https://git-scm.com/";

export default function KnowToDo() {
  return (
    <KnowContainer>
      <div className="content-container">
        <h1>{'<'}Meus Projetos{' />'}</h1>
          <ul className="projects" id="projects">
            <a target="_blank" href="https://vhbs-recipes.vercel.app/" rel="noreferrer">
              <li>Recipes App (TheMealDB API e The CockTailDB API) - Estudo Frontend</li>
            </a>
            <a target="_blank" href="https://vhbs-music-stream.vercel.app/" rel="noreferrer">
              <li>Music Stream (iTunes API) - Estudo Frontend</li>
            </a>
            <a target="_blank" href="https://vhbs-online-store.vercel.app/" rel="noreferrer">
              <li>Online Store (Mercadolibre API) - Estudo Frontend</li>
            </a>
          </ul>
        <div className="knows-container">
            <h3>O que estou estudando?</h3>
            <div className="knows">
              <div className="card-kows">
                <ImHtmlFive2 />
                <a target="_blank" href={ htmlRef } rel="noreferrer">
                  <h6>HTML</h6>
                </a>
              </div>

              <div className="card-kows">
                <FaCss3 />
                <a target="_blank" href={ cssRef } rel="noreferrer">
                  <h6>CSS</h6>
                </a>
              </div>

              <div className="card-kows">
                <IoLogoJavascript />
                <a target="_blank" href={ jsRef } rel="noreferrer">
                  <h6>JavaScript</h6>
                </a>
              </div>

              <div className="card-kows">
                <FaReact />
                <a target="_blank" href={ reactRef } rel="noreferrer">
                  <h6>React</h6>
                </a>
              </div>

              <div className="card-kows">
                <SiJest />
                <a target="_blank" href={ jestRef } rel="noreferrer">
                  <h6>Jest</h6>
                </a>
              </div>
              
              <div className="card-kows">
                <FaGitAlt />
                <a target="_blank" href={ gitRef } rel="noreferrer">
                  <h6>Git</h6>
                </a>
              </div>
            </div>
        </div>
          
        </div>
        
    </KnowContainer>
  )
}