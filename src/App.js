import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Hero2 />
    </>
  );
}

export default App;
