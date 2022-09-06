import  {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from "./nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/Services/Services";
import Contact from "./components/contact/Contact";

import './App.css';

function App() {
  return (
    <div className="App">
           <BrowserRouter>
           <Nav />
           <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
           </BrowserRouter>
    </div>
  );
}

export default App;
