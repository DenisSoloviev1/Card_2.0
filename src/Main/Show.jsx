// import Intro from "./Intro/Intro.jsx";
// import AboutMe from "./AboutMe/AboutMe.jsx";
// import Skills from "./Skills/Skills.jsx";
// import Portfolio from "./Portfolio/Portfolio.jsx";
// import { activeButton } from "../Nav/Nav.jsx";
// export default function Show() {
//     const renderActiveDisplay = () => {
//       switch (activeButton) { 
//         case "intro":
//           return <Intro />;
//         case "aboutMe":
//           return <AboutMe />;
//         case "skills":
//           return <Skills />;
//         case "portfolio":
//           return <Portfolio />;
//         default:
//           return null;
//       }
//     };

//     return <div className="display">{renderActiveDisplay()}</div>;
//   }

import React, { useContext } from "react";
import { ActiveButtonContext } from "./Nav";
import Intro from "../Main/Intro/Intro";
import AboutMe from "../Main/AboutMe/AboutMe";
import Skills from "../Main/Skills/Skills";
import Portfolio from "../Main/Portfolio/Portfolio";

export default function Show() {
  const { activeButton } = useContext(ActiveButtonContext);

  const renderActiveDisplay = () => {
    switch (activeButton) {
      case "intro":
        return <Intro />;
      case "about_me":
        return <AboutMe />;
      case "skills":
        return <Skills />;
      case "portfolio":
        return <Portfolio />;
      default:
        return null;
    }
  };

  return <div className="display">{renderActiveDisplay()}</div>;
}
