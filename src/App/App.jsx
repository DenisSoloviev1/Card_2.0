import "./App.scss";
import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";
import Main from "../Main/Main.jsx";
import {useState} from 'react'

export default function App() {
  const [activeButton, setActiveButton] = useState("intro");

  return (
    <>
      <Nav setActiveButton={setActiveButton} activeButton={activeButton} />
      <Main activeButton={activeButton} />
      <Footer />
    </>
  );
}
