import "./Appdev.css"

import AppScreen from "./../../../images/app-screen.jpg"
import MobileAppDev from "../../../images/App-dev.png"
import AppImg from "../../../images/app-dev-cycle.jpeg"
import Mern from "../../../images/MERN.webp"

export default function AppDev(){
    return (
        <div className="container">
            <h1 className="app-dev-header">Application Development</h1>
            <img className="app-img" src={AppImg} alt="App-img" />
            <div className="card my-4 border-0 px-5" style={{maxWidth:"540px;"}}>
              <div className="row g-0">
                <div className="col-md-6">
                  <img src={MobileAppDev} className="img-fluid rounded" alt="mobile-dev" />
                </div>
                
                <div className="col-md-6">
                  <div className="card-body text-start">
                    <h5 className="card-title text-primary">Responsive Mobile First Design and Development using HTML 5 & Bootstrap</h5>
                    <p className="card-text text-secondary">In recent years, more than 50% population has accessed the Internet from the mobile devices. It is now imperative that your website is ready and provide the optimal experience across Desktop, Mobile, and Tablet. Software Solution User Interface strategist, Graphic Designers, and development experts have helped many clients to develop a highly optimize websites ready for different types of browsers and variety of screen sizes, by leveraging the best practices and standards, and using the HTML 5 and Bootstrap.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card my-5 border-0 px-5 " style={{maxWidth:"540px;"}}>
              <div className="row g-0">
                <div className="col-md-6">
                  <div className="card-body text-start">
                    <h5 className="card-title text-primary">Mobile (iOS, Andriod, Windows, HTML 5)</h5>
                    <p className="card-text text-secondary">We deliver end-to-end mobile solution comprise of delivering mobile strategy through implementation that aligns with client expectations and goals. Our skilled developers will build your mobile application for any or all three major platforms – iOS, Android, and Windows – and then even help you integrate them with all other enterprise systems. From quality back-end development to an elegant user interface up front, Zeurix provides end-to-end mobile solutions our competitors can’t replicate.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={AppScreen} className="img-fluid rounded" alt="mobile-dev" />
                </div>
              </div>
            </div>
            <div className="card my-4 border-0 px-5" style={{maxWidth:"540px;"}}>
              <div className="row g-0">
                <div className="col-md-6">
                  <img src={Mern} className="img-fluid rounded" alt="mobile-dev" />
                </div>
                
                <div className="col-md-6">
                  <div className="card-body text-start">
                    <h5 className="card-title text-primary">Develop innovative React JS, AngularJS, MERN Stack Application</h5>
                    <p className="card-text text-secondary">Developing a specialized is challenging, without proper experience and expertise in modern tools, frameworks, and technologies can be time-intensive and expensive. Software Solution consultants are always forefront on building a solution that leverages the cutting edge technologies such as ReactJS Angular, NodeJS Firebase, MondoDB. We have helped many businesses to modernize and migrate existing legacy applications to MERN stack to save cost, improve productivity and access information anywhere and anytime.</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}