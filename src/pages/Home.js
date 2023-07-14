import * as React from "react";
import { useState, useRef } from "react";
import Accueil from "../Components/Accueil";
import Navbar from "../Components/Navbar";
import Skills from "../Components/Skills";
import Divider from "@mui/material/Divider";

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <div style={{ background: "#141414" }}>
      <Navbar />
      <Accueil />
      <Divider />
      <Skills />
    </div>
  );
};
export default Home;
