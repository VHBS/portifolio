import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  position: fixed;
  z-index: 1;
  justify-content: center;
  margin-top: -0.1em;
  height: 3em;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(0.45em);
  box-shadow: 0em 0em 1em 0.5em rgba(0, 0, 0, 0.5);  

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.2em;
    
  }

  .nav-item {
    margin: auto 1em;
    padding: 0 1em;
    color: rgb(226, 234, 255, 0.8);
    text-decoration: none;
  }

  .nav-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: rgb(226, 234, 255, 0.8);
    border-radius: 0.2em;
  }

  .selected-item {
    background-color: rgba(255, 255, 255, 0.25);
    color: rgb(226, 234, 255, 0.8);
    border-radius: 0.2em;
  }
  
  .separator {
    font-weight: 100;
    font-size: 1.2em;
    color: rgba(255, 255, 255, 0.5);
  }

  
`;

const ModalProjects = styled.div`
  backdrop-filter: none;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    color: white;
    margin-top: 2.2em;
    margin-left: 9.75em;
    padding: 1em;
    border-radius: 0.2em;
    border: 0.12em solid rgba(255, 255, 255, 0.15);

    .container-icon {
      text-decoration: none;
      color: rgb(226, 234, 255, 0.8);
    }

    .container-icon:hover {
      color: rgb(226, 234, 255, 1);
      background-color: grey;
    }
`;

export default function Navbar() {
  const [showProjects, setShowProjects] = useState(false);
  const { pathname } = useLocation();

  const checkSelectedItem = ( param ) => {
    return pathname === param ? "nav-item selected-item" : "nav-item"
  }

  return (
    <Nav>
        <div className="container">
          <Link className={ checkSelectedItem('/') } to="/">Início</Link>
          <div className="separator">|</div>
          <Link className={ checkSelectedItem('/projetos') } onMouseEnter={() => setShowProjects(true)} onMouseLeave={ () => setShowProjects(false)} to="/projetos">Projetos</Link>
        </div>
        {showProjects && (
        <ModalProjects className="modal-projects" onMouseEnter={() => setShowProjects(true)} onMouseLeave={ () => setShowProjects(false)}>
          <a className="container-icon" target="_blank" href="https://vhbs-recipes.vercel.app/" rel="noreferrer">
            <p>Recipe App</p>
          </a>
          <a className="container-icon" target="_blank" href="https://vhbs-music-stream.vercel.app/" rel="noreferrer">
            <p>Music Stream</p>
          </a>
        </ModalProjects>)}
    </Nav>
  )
}
