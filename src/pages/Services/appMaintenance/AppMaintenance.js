import Design from "../../../images/design.jpg"
import Maintenence from "../../../images/maintenence.jpg"
import Monitoring from "../../../images/monitoring.png"



export default function AppMaintenance(){
    return (
        <div>
            <div className="text-start design-header">
                  <h1>KEEP YOUR APP UPDATED, BUG FREE AND COMPETITIVE.</h1>
                  <p className="p-header">We Provide Complete Post Production Support</p>
                  <button className="req-quote-btn">Request Quote</button>
             </div>
            <img className="app-img" src={Design} alt="App-img" />
            <div className="container"> 
              <div className="p-3 mx-5">
                 <h1 className="text-bold">MOBILE AND WEB APP MAINTENANCE AND SUPPORT SERVICES.</h1>
              </div> 
              <div className="card my-4 border-0 px-5" style={{maxWidth:"540px;"}}>
               <div className="row g-0">
                 <div className="col-md-6">
                   <img src={Maintenence} className="img-fluid rounded" alt="mobile-dev" />
                 </div>
                 <div className="col-md-6">
                   <div className="card-body text-start">
                     <p className="card-text text-secondary pt-5">Simpalm provides end-to-end maintenance and support services for mobile and web applications. Whether you want to upgrade your app with the latest technology to overcome new challenges with application enhancement services or need to improve app security by bug fixing, Simpalm is there to help. With Simpalm, you get the best mobile app support services to keep your app up to date with market challenges, technology shifts, and changing user needs. We help several startups, nonprofits, enterprises, and many big brands to improve their app performance and monitor it. We offer dedicated mobile application maintenance and support services to our clients in the USA.</p>
                   </div>
                 </div>
                </div>
               </div>
               <div className="p-3 mx-5">
                 <h1 className="text-bold">Our App Maintenance and Support Services.</h1>
              </div>
              <div className="row row-cols-1 row-cols-md-2 g-4 my-4">
              <div className="col-md-4">
                  <div className="card">
                    <img src={Maintenence} style={{height:"230px"}} className="card-img-top" alt="maintenence" />
                    <div className="card-body" style={{height:"250px"}}>
                      <h5 className="card-title">App Monitoring</h5>
                      <p className="card-text">We monitor how your application is performing, from tracking server data to assessing app crashes and analyzing user feedback, as well as conducting security evaluations and App store management & monitoring. We also set a performance alert to detect and solve issues quickly to guarantee that your business operations and customers are minimally affected by downtime.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <img src={Monitoring} style={{height:"230px"}} className="card-img-top" alt="..." />
                    <div className="card-body" style={{height:"250px"}}>
                      <h5 className="card-title">Bug Fixing</h5>
                      <p className="card-text">Sometimes an application has a lot of bugs during pre-release testing. We carry out regular maintenance tasks such as handling the source code, patches, releases, fixing crashes, and ensuring that your app stays bug free and provides complete support for interfaces and standard code.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <img src={Maintenence} style={{height:"230px"}} className="card-img-top" alt="..." />
                    <div className="card-body" style={{height:"250px"}}>
                      <h5 className="card-title">App Enhancement</h5>
                      <p className="card-text">A successful product will progress steadily and continuously hold the attention of its users. The app needs regular enhancement based on the latest market trends, or else it will be replaced by newer and more innovative products. Simpalm offers best enhancement services for Android, iOS, Cross-platform, and Web apps.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}