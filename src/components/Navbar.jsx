import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Nav = styled.nav`

  .nothing {
    display: flex;
  }

  .container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.0);
  margin: 1em auto 2em;
  backdrop-filter: blur(0.25em);
  border: 0.12em solid rgba(255, 255, 255, 0.1);
  border-radius: 0.2em;
  box-shadow: 0em 0em 1em 0.5em rgba(0, 0, 0, 0.2);
  }

  .nav-item {
  margin: auto 1em;
  padding: 0 1em;
  color: rgb(226, 234, 255, 0.8);
  text-decoration: none;
  }
  
  .separator {
    font-weight: 100;
    font-size: 1.2em;
    color: rgba(255, 255, 255, 0.5);
}
`;

export default function Navbar() {
  return (
    <Nav>
      <div className="nothing">
        <div className="container">
          <Link className="nav-item" to="/">Home</Link>
          <div className="separator">|</div>
          <Link className="nav-item" to="/about">About</Link>
        </div>
      </div>
    </Nav>
  )
}
