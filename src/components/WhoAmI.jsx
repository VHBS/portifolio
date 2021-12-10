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
  margin: 2em auto 0;

  h1 {
    padding: 0 5% 0 5%;
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
      color: rgb(226, 234, 255, 0.8);
    }

    a:hover {
      color: rgb(226, 234, 255, 1);
      transform: scale(1.1);
    }

  }
`;

export default function WhoAmI() {
  return (
    <CardContent>
      <h1>{"<"}Who am I? /{">"}</h1>
      <p>I'm a Full Stack Web Development Student, 
        that history started at Trybe a few months ago.
        Nowadays I'm living in Praia Grande / SP - Brazil.
      </p>
      <h2>What is my goal?</h2>
        <p>At the moment my priority is to study and absorb as much knowledge as possible.
        Every day is a journey for me and I'm in process to be the best I've ever been.
        </p>
      <div className="contact-container">
      <h3>To more details!</h3>
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

/* background-color: rgba(21, 18, 21,0.8); */
  /* background-image: linear-gradient(rgba(21,21,21,0.2),rgb(21,21,21)); */
  // backdrop-filter: blur(1em);
  // text-align: justify;
  // box-shadow: 0em 0em 1em 0.5em rgba(0, 0, 0, 0.4);
  // display: flex;
  // flex-direction: column;
  // color: rgb(226, 234, 255, 0.8);
  // padding: 1em 0 2em;
  // width: 30.2em;
  // margin: 0 auto;
  // margin-bottom: 2em;

  // h1 {
  //   font-size: 4em;
  //   font-weight: 100;
  //   font-style: italic;
  //   padding: 2% 5% 2%;
  // };

  // h4 {
  //   font-weight: 200;
  //   font-size: 1.5em;
  //   padding: 2% 5% 2%;
  // };

  // p {
  //   padding: 0.5% 10% 1.5em 16%;
  //   font-size: 0.85em;
  // };

  // h5 {
  //   text-align: center;
  // };

  // .contact-container {
  //   margin: 0.75em auto 0;
  //   width: 30%;
  //   display: flex;
  //   justify-content: space-around;
  //   font-size: 2em;
  // }

  // .contact-container a {
  //   color: rgb(226, 234, 255, 0.8);
  // }

  // .contact-container a:hover {
  //   color: rgb(226, 234, 255, 1);
  //   transform: scale(1.1);
  // }