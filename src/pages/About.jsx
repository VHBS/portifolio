import Navbar from '../components/Navbar';
import React from 'react';
import styled from "styled-components";

const Main = styled.main`
`;

export default function About() {
  return (
    <Main>
      <Navbar />
      <h1>About</h1>
    </Main>
  )
}
