import "./Main.scss";
import Intro from "./Intro/Intro.jsx";
// import AboutMe from "./AboutMe/AboutMe.jsx";
// import Skills from "./Skills/Skills.jsx";
// import Portfolio from "./Portfolio/Portfolio.jsx";
// import { activeButton } from "../Nav/Nav.jsx";
// import {Show} from "../Nav/Nav.jsx"

export default function Main() {
  

  return (
    <main>
      <section>
        <div className="card">
          <img src="images/me.jpg" alt="me" className="myPhoto" />
          <div className="bio">
            <h1>Денис Соловьев</h1>
            <p>Frontend developer</p>
          </div>
        </div>
      </section>

      <section>
        {/* <Show /> */}
        <div className="display"><Intro/></div>
      </section>
    </main>
  );
}


