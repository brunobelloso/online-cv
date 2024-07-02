import React from 'react';
import { GlobalStyle, Container } from './styles';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header id="header" />
        <About id="about" />
        <Experience id="experience" />
        <Education id="education" />
        <Skills id="skills" />
      </Container>
    </>
  );
};

export default App;
