import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  flex: 1;
  background-color: var(--black);
  color: var(--white);
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

export default function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
