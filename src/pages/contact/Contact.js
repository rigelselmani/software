import Hours from "./Hours"
import  Map  from "./Map"
import ContactForm from "./ContacForm"

import "./Contact.css"

export default function Contact(){

    return (
    <div className="container justify-content-center d-sm-flex d-md-flex " >
        <div className="row ">
        <Map />
            <ContactForm />
            <div className="col-lg-1 col-md-0 col-sm-0"></div>
            <Hours />
        </div>
    </div>    
    )
}