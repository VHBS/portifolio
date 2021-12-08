import React from 'react'
import styled from 'styled-components'

const CardContent = styled.div`
  background-color: rgba(21, 18, 21,0.8);
  padding: 1.5em 2em;
  width: 55%;
  text-align: justify;
  font-weight: 500;
  box-shadow: 0em 0em 1em 0.5em rgba(0, 0, 0, 0.4);
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  color: rgb(226, 234, 255, 0.8);
  min-width: 765px;

  h1 {
    font-size: 4em;
    font-weight: 100;
    font-style: italic;
  }

  h4 {
    font-weight: 200;
    font-size: 1.5em;
  }

  p {
    padding: 1.5em 10em 1.5em 16em;
    font-size: 0.85em;
  }

  h5 {
    text-align: center;
  }
`

export default function WhoAmI() {
  return (
    <CardContent>
      <h1>{"<"}Who am I? /{">"}</h1>
      <p>I’m a Full Stack Web Development Student, 
        that history started at Trybe a few months ago.
        Nowadays I’m living in Praia Grande / SP - Brazil.
      </p>
      <h4>What is my objective?</h4>
        <p>At the moment my priority is to study and absorb as much knowledge as possible.
        Every day is a journey for me and I'm in progress to be the best I've ever been.
        </p>
      <h5>To more details!</h5>
    </CardContent>
  )
}
