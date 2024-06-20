import "./App.scss";
import Header from "../widgets/Header/Header.jsx";
import Footer from "../widgets/Footer/Footer.jsx";
import Main from "../widgets/Main/Main.jsx";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}
