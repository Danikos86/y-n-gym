import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./Components/About";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Tabs from "./Components/Tabs";
import Trainer from "./Components/Trainer";
import './style.css'

function App() {
  return (
    <div /* className="wrapper" */>
      <Header/>
      <Main/>
      <Tabs/>
      <Trainer/>
      <About/>
      <Contacts/>
      <Footer/>     
    </div>
  );
}

export default App;
