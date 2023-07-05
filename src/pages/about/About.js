import ContactForm from "../ContactForm/Contact-form"
import Slider from "./slider/Slider"
import Design from "../../images/design.jpg"

export default function About(){
    return(
        <div className="">
            <div className="text-start design-header">
               <h1>Transforming Ideas into</h1>
               <p className="p-header">Digital Products</p>
               <button className="req-quote-btn">Request Quote</button>
          </div>
            <img className="app-img" src={Design} alt="App-img" />
            <div className="container text-start">
                <h3 className="text-primary">Who are we...</h3>
                <p>Software Solution is a family owned business.</p>
                <p>We have proven experience of designing complex and innovative solutions across Mobile, Cloud, Collaboration and Custom Application solutions. With its idea combination of business and technology skills, and diverse team of Cloud and SharePoint Architects, developers and designers having a track record of delivering exceptional results can help you develop the IT strategy to unprecedented position, and energize your business to become part of the technology revolution, and adapt a new generation of web, mobile, collaboration and cloud solutions to gain strategic advantages and improve efficiencies.</p>
                <h3 className="text-primary">Our Difference....</h3>
                <ol>
                    <li>Proven experience in developing and architecting innovative solutions for Mobile, HTML 5, AngularJS, Bootstrap, Reactjs, Hybrid Cloud, Microsoft SharePoint and Office 365. Please review our case studies that depicts are expertise in each of these technologies.</li>
                    <li>We leverage Microsoft Application Development Life Cycle (ALM), SCRUM, Microsoft Visual Studio Team services and Azure DevOps to deliver quality products and on time and under budget.</li>
                    <li>In-house Design and User Experience (UX) Teams to deliver modern, intuitive and immersive experience for Mobile, Tablet and Desktop.</li>
                </ol>
            </div>
            <h3>Projects</h3>
            <Slider />
            <ContactForm />
        </div>
    )
}