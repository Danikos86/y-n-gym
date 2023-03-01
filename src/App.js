/* import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; */
import { About } from "./Components/About";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Sidepanel from "./Components/Sidepanel";
import Tabs from "./Components/Tabs";
import Trainer from "./Components/Trainer";
import './style.css'

function App() {


  return (
    <div className="wrapper" >
      <div className="content">
      <Header/>
      <Sidepanel/>
      <Main/>
      <Tabs/>
      <Trainer/>
      <About/>
      <Contacts/>
      <Footer/>     
      </div>
    </div>
  );
}

export default App;
