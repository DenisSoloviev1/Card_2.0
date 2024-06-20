import "./Main.scss";
import Card from "../Card/Card.jsx";
import { Routes, Route } from "react-router-dom";
import Intro from "../../pages/Intro/Intro.jsx";
import AboutMe from "../../pages/AboutMe/AboutMe.jsx";
import Skills from "../../pages/Skills/Skills.jsx";
import Portfolio from "../../pages/Portfolio/Portfolio.jsx";

export default function Main() {
  return (
    <main>
      <Card />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </main>
  );
}
