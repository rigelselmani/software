import Branding from "../../images/branding.jpg"
import Marketing from "../../images/digital-marketing.png"
import Web from "../../images/WEB.jpg"

export default function HomeCard(){
    return (
    <div className="container">  
        <p className=" home fs-4 my-3 justify-content-center">We deliver innovative solutios for enterprise to stay agile, competitive, operationally lean, and empowers them to do MORE.</p>
        <h3 className="text-center" >SERVICES</h3>
      <div className="card-box my-4 pb-5">
        <div className="card-home bg-light px-2">
          <h5 className="card-title mb-4">Web Development</h5>
          <img src={Web} className="card-img-top" alt="office-sharepoint" style={{height:"250px"}} />
          <div className="card-body p-0">
            <p className="card-text">Do you need a brand new website? Not sure how you can create a constant stream of quality site content while also working on your business? We can help!</p>
            <a href="/services/web-development" className="btn btn-primary">MORE INFO</a>
          </div>
        </div>
        <div className="card-home bg-light  px-2">
          <h5 className="card-title mb-4">Digital Marketing</h5>
          <img src={Marketing} className="card-img-top" alt="cloud-img" style={{height:"250px"}} />
          <div className="card-body p-0">
            <p className="card-text">Take advantage of all the opportunities that digital marketing has to offer without getting overwhelmed, bogged down in technology, or lost in a sea of expensive fads.</p>
            <a href="/services/cloud-back-end" className="btn btn-primary">MORE INFO</a>
          </div>
        </div>
        <div className="card-home bg-light px-2">
          <h5 className="card-title mb-4">Branding</h5>
          <img src={Branding} className="card-img-top" alt="app-img" style={{height:"250px"}} />
          <div className="card-body d-flex flex-column p-0 ">
            <p className="card-text">More than ever, you need a strong brand to stand out in your market. Work with us to design and promote the best you that you can be.</p>
            <a href="/services/application-development" className="more-info align-self-center btn btn-primary">MORE INFO</a>
          </div>
        </div>
      </div>  
    </div>
    )
}