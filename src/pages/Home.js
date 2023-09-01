import * as React from "react";
// import { useState, useRef } from "react";
import Accueil from "../Components/Accueil";
import Navbar from "../Components/Navbar";
import Skills from "../Components/Skills";
import Experience from "../Components/Experience";

const Home = () => {
  // const [collapsed, setCollapsed] = useState(false);

  // const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <>
      <Navbar />
      <Accueil />
      <Skills />
      <Experience />
    </>
  );
};
export default Home;
