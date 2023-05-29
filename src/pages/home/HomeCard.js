import AppDev from "../../images/mobile-app-dev.jpg"
import Cloud from "../../images/cloud.jpg"
import OfficeSharepoint from "../../images/office-sharepoint.webp"

export default function HomeCard(){
    return (
    <div className="container">  
        <p className=" home p-4 fs-4 mx-5 justify-content-center" style={{ letterSpacing:".9px", fontFamily:"roboto", color:"rgb(7,133,206)"}}>We deliver innovative solutios for enterprise to stay agile, competitive, operationally lean, and empowers them to do MORE.</p>
        <h3 className="text-start" style={{marginLeft:"90px", fontFamily:"roboto", color:"rgb(7,133,206)"}}>SERVICES</h3>
      <div className="d-flex flex-row justify-content-evenly my-4">
        <div className="card bg-light  py-4 px-2" style={{width: "25%"}}>
          <h5 className="card-title mb-4">Cloud</h5>
          <img src={Cloud} className="card-img-top" alt="cloud-img" style={{height:"250px"}} />
          <div className="card-body p-0">
            <p className="card-text text-secondary">IMPROVE AGILITY, ACCESS CRITICAL INFORMATION EVERYWHERE AND REDUCE CAPITAL COSTS WITH MODERN CLOUD SOLUTIONS ON AZURE.</p>
            <a href="/" className="btn btn-primary">MORE INFO</a>
          </div>
        </div>
        <div className="card bg-light p-4 px-2" style={{width: "25%"}}>
          <h5 className="card-title mb-4">APPLICATION Development</h5>
          <img src={AppDev} className="card-img-top" alt="app-img" style={{height:"250px"}} />
          <div className="card-body p-0">
            <p className="card-text text-secondary">EXPERTS IN DEVELOPING COST EFFECTIVE AND CUTTING EDGE SOLUTIONS FOR WEB AND MOBILE.</p>
            <a href="/services/application-development" className="btn btn-primary">MORE INFO</a>
          </div>
        </div>
        <div className="card p-4 px-2" style={{width: "25%"}}>
          <h5 className="card-title mb-4">Office 365 & SharePoint</h5>
          <img src={OfficeSharepoint} className="card-img-top" alt="office-sharepoint" style={{height:"250px"}} />
          <div className="card-body p-0">
            <p className="card-text text-secondary">LET US HELP YOU MODERNIZED COLLABORATION SOLUTIONS VIA SHAREPOINT 2013, SHAREPOINT ONLINE AND OFFICE 365.</p>
            <a href="/" className="btn btn-primary">MORE INFO</a>
          </div>
        </div>
      </div>  
    </div>
    )
}