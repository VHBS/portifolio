import { FaReact } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiJest } from "react-icons/si";
import styled from "styled-components";

const KnowContainer = styled.div`
  background-color: rgb(21,21,21);
  padding: 1.5em 2em;
  width: 55%;
  margin: 2em 2em 0em 30%;
  min-width: 765px;
  display: flex;
  flex-direction: column;

  .content-container {
  display: flex;
  flex-direction: column;
  color: rgb(226, 234, 255, 0.8);
  }

  .knows {
    display: flex;
    justify-content: center;
    /* margin: 2em 0em; */
  }

  .card-kows {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 4em;
    padding: 0em 2em;
    font-size: 1.5em;
    margin: 1em 0em;
  }

  .card-kows h6 {
    /* font-style: italic; */
    font-weight: 300;

  }

  h1 {
    font-size: 4em;
    font-weight: 100;
    font-style: italic;
  }
`;

export default function KnowToDo() {
  return (
    <KnowContainer>
      <div className="content-container">
          <h1>{'<'}What I studing?{' />'}</h1>
          <div className="knows">
            <div className="card-kows">
              <ImHtmlFive2 className="logo-knows"/>
              <h6>HTML</h6>
            </div>
            <div className="card-kows">
              <FaCss3 className="logo-knows"/>
              <h6>CSS</h6>
            </div>
            <div className="card-kows">
              <IoLogoJavascript className="logo-knows"/>
              <h6>JavaScript</h6>
            </div>
          </div>
          <div className=" knows">
            <div className="card-kows">
              <FaReact className="logo-knows"/>
              <h6>React</h6>
            </div>
            <div className="card-kows">
              <SiJest className="logo-knows"/>
              <h6>Jest</h6>
            </div>
            <div className="card-kows">
              <FaGit className="logo-knows"/>
              <h6>Git</h6>
            </div>
          </div>
        </div>
        <div className="content-container" id="projects">
          <h3>My Projects</h3>
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
