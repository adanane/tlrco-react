import React from "react";
import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Manifesto from "./components/Manifesto/Manifesto";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <Manifesto />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
