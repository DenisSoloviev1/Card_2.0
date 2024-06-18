import "./App.scss";
import Header from "../widgets/Header/Header.jsx";
import Footer from "../widgets/Footer/Footer.jsx";
import Main from "../widgets/Main/Main.jsx";
import {useState} from 'react'

export default function App() {
  const [activeButton, setActiveButton] = useState("intro");

  return (
    <>
      <Header setActiveButton={setActiveButton} activeButton={activeButton} />
      <Main setActiveButton={setActiveButton} activeButton={activeButton} />
      <Footer />
    </>
  );
}
