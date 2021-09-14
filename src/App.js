import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyle";
import React from 'react-scroll';
import Page3 from "./components/Page3";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Page3 />
      <Hero2 />
      <Footer />
    </>
  );
}

export default App;
