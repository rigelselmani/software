import  {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from "./components/Nav";
import Home from ".//pages/home/Home";
import About from ".//pages/about/About";
import Services from ".//pages/Services/Services";
import Contact from ".//pages/contact/Contact";


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
