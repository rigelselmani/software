import  {BrowserRouter, Route, Switch} from "react-router-dom"
import Nav from "./nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/Services/Services";
import Contact from "./components/contact/Contact";

import './App.css';

function App() {
  return (
    <div className="App">
           <Nav />
    </div>
  );
}

export default App;

