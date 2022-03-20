import React from 'react'
import styled from 'styled-components'
import WhoAmI from './WhoAmI'
// import KnowToDo from '../components/KnowToDo';

const MainContent = styled.article`
  min-height: 100vh;
  border-top: 0.01em solid rgba(255, 255, 255, 0.25);
  background-image: linear-gradient(rgba(41, 41, 41, 0.2),rgba(36, 0, 31, 0.75));
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
`;

export default function Content() {
  return (
    <MainContent>
      <WhoAmI />
      {/* <KnowToDo /> */}
    </MainContent>
  )
}
