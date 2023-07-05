import "./Design.css"

import Design from "../../../images/design.jpg"
import WebDesign from "../../../images/web-design.png"
import Requirements from "../../../images/requirements.jpg"
import WireFrame from "../../../images/wireframe.png"
import Uiuxdesign from "../../../images/uiuxdesign.jpg"
import ContactForm from "../../ContactForm/Contact-form"
 
export default function AppDev(){

    return (
        <div>
           <div className="text-start design-header">
               <h1>DESIGN LED ENGINEERING</h1>
               <p className="p-header">Mobile & Web UI/UX Experts</p>
               <p className="p-header">Call Us To Kickstart Your Project</p>
               <button className="req-quote-btn">Request Quote</button>
           </div>
            <img className="app-img" src={Design} alt="App-img" />
            <div className="container">
              <div className="p-1 text-secondary">
                 <h1>UI/UX Design Services for</h1>
                 <h3>Mobile and Web Application.</h3>
                 <p className="design-description-page ">A critical part of application design is the way in which an application will be used and the reactions it will generate from users. The User Interface (UI) and User Experience (UX) is important in all application development, but especially in small, highly personal, hand-held devices that are depended upon often and typically used on the go.When the UI and UX is right, your app will deliver a smoothly flowing, intuitive, productive, highly positive experience that will make users want to use it again and again. Software Solution is one of the leading UI/UX design services provider in USA, our team of acclaimed app UI/UX designers define success as transforming application functionalities into a richly satisfying experience for users. Our designers create User Interfaces that are beautiful, easy to use, and easy to understand in any scale–from elegant, single-purpose microsites to powerful mobile or desktop-class applications.</p>
              </div>
              <hr></hr>
                <div className="card my-4 border-0 ">
                  <div className="row g-0">
                    <div className="col-lg-6 col-sm-12">
                      <img src={WebDesign} className="img-fluid img-design mt-5 rounded-5" alt="mobile-dev" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="card-body text-start">
                        <h5 className="card-title text-primary">Strategy</h5>
                        <p className="card-text text-secondary">We begin every Mobile or Web project by crafting a specific strategy based on the project requirements, including your aesthetic desires, brand needs, business needs, and budget. Before starting on the design, we determine all design objectives, content requirements, and the information architecture needed.</p>
                        <p className="card-text text-secondary">Our willingness to tailor a unique strategy for each and every project, is what enables us to deliver mobile/web applications that users love, and that provide high sales-conversion rates and ROI for our clients.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card my-4 border-0 ">
                  <div className="row g-0">
                    <div className="col-lg-6 col-sm-12">
                      <img src={Requirements} className="img-fluid img-design mt-5 rounded-5" alt="mobile-dev" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="card-body text-start">
                        <h5 className="card-title text-primary">Requirements</h5>
                        <p className="card-text text-secondary">Drawing on our years of application development experience and hundreds of successful launches, we take an extraordinary approach to understanding your project requirements, specific goals and vision. By giving proper attention to requirements analysis, Sofware Soulion is able to help you choose the appropriate scope, use cases, functions, features, and architecture and other project elements that will deliver the greatest business value and performance for the application.</p>
                        <p className="card-text text-secondary">We focus requirements on users and business goals. We take pride in being your objective project partner–focused on your satisfaction, not ours.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card my-4 border-0 ">
                  <div className="row g-0">
                    <div className="col-lg-6 col-sm-12">
                      <img src={WireFrame} className="img-fluid img-design mt-5 rounded-5" alt="mobile-dev" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="card-body text-start">
                        <h5 className="card-title text-primary">Wireframes</h5>
                        <p className="card-text text-secondary">Sofware Solution uses the latest collaborative wireframing tools to create interactive wireframes, or visual prototypes of your application. During the wireframing process, we determine the application’s functional flow, navigation, and a number of screens needed. During this process, we closely work with clients to help them see, understand, and be actively involved in the creation of their application. As a result, our clients never experience unpleasant surprises or disappointments.</p>
                        <p className="card-text text-secondary">They stay intimately involved in the choices and decisions made on the project. At the same time, Sofware Solutions’s expert team of professionals drive the project and provide the attention to detail, budget, and timeline that ensures a project’s successful completion.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card my-4 border-0 ">
                  <div className="row g-0 ">
                    <div className="col-lg-6  col-sm-12">
                      <img src={Uiuxdesign} className="img-fluid img-design mt-5 rounded-5" alt="mobile-dev" />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="card-body text-start">
                        <h5 className="card-title text-primary">UI/UX Designing</h5>
                        <p className="card-text text-secondary">In order to provide the best UI/UX design Services, Software Solution puts exceptional focus on UI design. We design rich and modern User Interfaces that smoothly work and show on all applicable screen sizes, resolutions, and iOS/Android platform iterations.</p>
                        <p className="card-text text-secondary">We follow Minimal User Interface Design principles to provide ultra-functional mobile/web apps that look and work great. We also implement UI/UX approaches that increase our ability to deliver increased personalization and gesturization (pinching, swiping, scrolling, zooming, multi-touch) to increase user engagement and enjoyment in the application.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <ContactForm />
        </div>
    )
}