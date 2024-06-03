import "./Main.scss";
import Intro from "../Main/pages/Intro/Intro.jsx";
import AboutMe from "../Main/pages/AboutMe/AboutMe.jsx";
import Skills from "../Main/pages/Skills/Skills.jsx";
import Portfolio from "../Main/pages/Portfolio/Portfolio.jsx";

export default function Main({ setActiveButton, activeButton }) {
  return (
    <main>
      <div className="card">
        <img src="images/me.jpg" alt="me" className="myPhoto" />
        <div className="bio">
          <h1>Денис Соловьев</h1>
          <p>Frontend developer</p>
        </div>
      </div>
      <div className="display">
        {activeButton === "intro" && (
          <Intro setActiveButton={setActiveButton} />
        )}
        {activeButton === "about_me" && <AboutMe />}
        {activeButton === "skills" && <Skills />}
        {activeButton === "portfolio" && <Portfolio />}
      </div>
    </main>
  );
}
