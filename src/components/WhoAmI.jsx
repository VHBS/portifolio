import React from 'react';
import styled from 'styled-components';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const CardContent = styled.div`
  backdrop-filter: blur(1em);
  text-align: justify;
  box-shadow: 0em 0em 1em 0.5em rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  color: rgb(226, 234, 255, 0.8);
  padding: 2em 10% ;
  width: 80%;

  h1 {
    font-weight: 100;
    font-size: 4em;
    font-style: italic;
    text-align: start;
  }

  h2 {
    padding: 0 5% 0 5%;
    font-weight: 200;
    font-size: 2em;
    font-style: italic;
  }

  p {
    padding: 1em 5% 1em 10%;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 0 0;
    
    a {
      margin-top: 1em;
      padding: 0 0.5em;
      font-size: 2em;
      color: rgb(226, 234, 255, 0.6);
    }

    a:hover {
      color: rgb(226, 234, 255, 1);
      transform: scale(1.1);
    }
  }
`;

export default function WhoAmI() {
  return (
    <CardContent id="sobre-mim">
      <h1>{"<"}Sobre /{">"}</h1>
      <p> Eu sou um estudante de Desenvolvimento Web Full Stack, e essa jornada começou recentemente juntamente com a Trybe.
    Atualmente eu estou morando em Praia Grande / SP - Brasil.
      </p>
      <h2>Qual é o meu objetivo?</h2>
        <p>No momento minha prioridade é estudar  e absorver todo conhecimento possivel. Todo dia é uma jornada pra mim e eu estou no progresso de ser o melhor que jamais fui.
        </p>
      <div className="contact-container">
        <h3>Para mais detalhes!</h3>
        <div className="links-contact">
          <a target="_blank" href="https://www.linkedin.com/in/victorschlichting/" rel="noreferrer"><AiFillLinkedin /></a>
          <a target="_blank"
          href="https://github.com/VHBS" rel="noreferrer"><AiFillGithub /></a>
          <a target="_blank"
          href="https://www.instagram.com/vh_bs/" rel="noreferrer"><AiFillInstagram /></a>
        </div>
      </div>
    </CardContent>
  )
}
