import React from 'react'
import styled from 'styled-components'
import WhoAmI from './WhoAmI'
import KnowToDo from '../components/KnowToDo';

const MainContent = styled.article`
  border-top: 0.01em solid rgba(255, 255, 255, 0.25);
  padding: 5em 2em;
  background-image: linear-gradient(transparent,rgba(41, 41, 41, 1));
  display: flex;
  flex-direction: column;
  min-width: 765px;
  /* align-items: center; */
  /* justify-content: space-evenly; */
  /* background-color: rgba(41, 41, 41,0.5); */
`

export default function Content() {
  return (
    <MainContent>
      <WhoAmI />
      <KnowToDo />
    </MainContent>
  )
}
