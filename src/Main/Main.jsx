import "./Main.scss";
// import Intro from "./Intro/Intro.jsx";
// import AboutMe from "./AboutMe/AboutMe.jsx";
// import Skills from "./Skills/Skills.jsx";
// import Portfolio from "./Portfolio/Portfolio.jsx";
// import { activeButton } from "../Nav/Nav.jsx";

export default function Main() {
  // function Show() {
  //   const renderActiveDisplay = () => {
  //     switch (activeButton) { перданное значение
  //       case "intro":
  //         return <Intro />;
  //       case "aboutMe":
  //         return <AboutMe />;
  //       case "skills":
  //         return <Skills />;
  //       case "portfolio":
  //         return <Portfolio />;
  //       default:
  //         return null;
  //     }
  //   };

  //   return <div className="display">{renderActiveDisplay()}</div>;
  // }
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
      </section>
    </main>
  );
}
