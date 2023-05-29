import Contact from "../../ContactForm/Contact-form"

import Design from "../../../images/design.jpg"

export default function Webdev(){
        return (  
        <div>
            <div className="text-start design-header">
               <h1>USING WEB TECHNOLOGIES TO SOLVE PROBLEMS</h1>
               <p className="p-header">JAVASCRIPT, Reactjs AND NodeJS</p>
               <button className="req-quote-btn">Request Quote</button>
          </div>
            <img className="app-img" src={Design} alt="App-img" />
            
            <Contact />
        </div>
        )
     
}