import React from 'react'
import styled from 'styled-components'
import WhoAmI from './WhoAmI'
import KnowToDo from '../components/KnowToDo';

const MainContent = styled.article`
  border-top: 0.01em solid rgba(255, 255, 255, 0.25);
  /* padding: 5em 10%; */
  /* background-image: linear-gradient(rgba(41, 41, 41, 0.2),rgba(41, 41, 41, 0.75)); */
  background-image: linear-gradient(rgba(41, 41, 41, 0.2),rgba(36, 0, 31, 0.75));

  display: flex;
  flex-direction: column;
`;

export default function Content() {
  return (
    <MainContent>
      <WhoAmI />
      <KnowToDo />
    </MainContent>
  )
}
