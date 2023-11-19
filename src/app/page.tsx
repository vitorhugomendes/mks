import React from 'react';
import { StyledHomePage } from './pageStyles';
import { Header } from './_components';

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <StyledHomePage>
          <h2>teste2</h2>
        </StyledHomePage>
      </main>
    </>
  );
}
