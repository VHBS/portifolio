import { FaReact, FaCss3, FaGit } from "react-icons/fa";
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
  margin-bottom: 2em;
  padding: 1em 2em 2em;
  max-width: 26em;
  min-width: 26em;
  margin: 0 auto;

  .content-container {
  display: flex;
  flex-direction: column;
  color: rgb(226, 234, 255, 0.8);
  }

  .content-container h3 {
    font-size: 4em;
    font-weight: 100;
    font-style: italic;
    padding: 2% 5% 2%;
  }

  .knows {
    display: flex;
    justify-content: center;
  }

  .card-kows {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 4em;
    font-size: 1.5em;
    margin: 1em 1em;
  }

  .card-kows h6 {
    font-weight: 300;
  }

  h1 {
    font-size: 2.6em;
    font-weight: 100;
    font-style: italic;
    padding: 2% 5% 2%;
  }

  .projects {
    padding: 0 5% 0 10%;
    margin: 0 auto;
  }

  .projects li {
    margin: 1em 0;
  }
`;

export default function KnowToDo() {
  return (
    <KnowContainer>
      <div className="content-container">
          <h1>{'<'}What I studing?{' />'}</h1>
          <div className="knows">
            <div className="card-kows">
              <ImHtmlFive2 />
              <h6>HTML</h6>
            </div>
            <div className="card-kows">
              <FaCss3 />
              <h6>CSS</h6>
            </div>
            <div className="card-kows">
              <IoLogoJavascript />
              <h6>JavaScript</h6>
            </div>
          </div>
          <div className=" knows">
            <div className="card-kows">
              <FaReact />
              <h6>React</h6>
            </div>
            <div className="card-kows">
              <SiJest />
              <h6>Jest</h6>
            </div>
            <div className="card-kows">
              <FaGit />
              <h6>Git</h6>
            </div>
          </div>
          <h3>My Projects</h3>
        </div>
        <div className="content-container projects" id="projects">
          <ul>
            <li>Online Store (Mercadolibre API) - Frontend study</li>
            <li>Music Stream (iTunes API) - Frontend study</li>
            <li>Super Trunfo Cards - React study</li>
            <li>ToDo List - JavaScript study</li>
          </ul>
        </div>
    </KnowContainer>
  )
}
