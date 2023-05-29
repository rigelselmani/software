import { useState } from "react"
import { send } from "emailjs-com"

import "./Contact-form.css"

export default function Schedule (){

    const [fullname, setFullName]=useState("");
    const [number, setNumber]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");

    function handleSubmit(e){
       e.preventDefault()
       console.log( "1:",fullname, "2:",number, "3:",email, "4:",message)
       send(
        "service_qjoznwa",
        "template_5vl4eys",
        {fullname, number, email, message},
        "cg_p1GRyMNmDPq4tH"
      ).then((response)=> {
        console.log("Message sent successfully", response.status,response.text)
      })
      .catch((err) =>{
        console.log("Failed", err)
      })
       setFullName("");
       setNumber("");
       setEmail("");
       setMessage("");
    }
        
        return (
          <div className="schedule">
              <h1 className="schedule-h1">CONTACT SOFTWARE SERVICES</h1>
              <a className="schedule-h3" href="tel:7038706927">703-870-6927</a>
                  <form onSubmit={handleSubmit}>
                      <div className="wrapper-schedule">
                          <input className="page-input" onChange={(e)=> setFullName(e.target.value)}  value={fullname} required type="text" id="full-name" name="full-name" placeholder="Full-Name" /><br/>
                          <input className="page-input" onChange={(e)=> setNumber(e.target.value)} value={number} required type="phone" id="number" name="number" placeholder="Number" /><br/>
                          <input className="page-input" onChange={(e)=> setEmail(e.target.value)} value={email} required type="email" id="email" name="email" placeholder="Email" /><br/>
                          <textarea className="page-input" id="message" onChange={(e)=>setMessage(e.target.value)} value={message} name="message" rows="4" placeholder="Message" />
                      </div>
                      <br/>
                      <button className="btn mt-0">Submit</button>
                  </form>
          </div>
    )
}