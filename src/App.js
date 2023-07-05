import  {BrowserRouter, Route, Switch} from "react-router-dom"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
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
           <Switch>
              <Route  exact path="/" >
                 <Home/>
              </Route>
              <Route path="/about">
                  <About/>
              </Route>
              <Route path="/services/:id">
                 <Services/>                
              </Route>
              <Route path="/contact">
                 <Contact/>
              </Route>
            </Switch>
            <Footer />
           </BrowserRouter>
    </div>
  );
}

export default App;
