import "./Home.css"
import logo from "../../images/reponsive-design.jpg"
import HomeCard from "./HomeCard"
import Slider from "./Slider"

export default function Home(){

    return(
      <div>
        <div className="home-content d-flex flex-row justify-content-center">
            <div className="home-section text-start" style={{width: "36%",margin:"150px 0 0 0"}}>
              <div className="" style={{marginLeft:"22%"}}>
                <h5 className="home-title mb-1 " style={{fontFamily:"roboto", color:"rgb(7,133,206)"}}>Mobile First</h5>
                <p className="p-text mb-0">Responsive design & Development</p>
                <p className="p-text">Make your Website & App work on desktop tablet mobile</p>
                <a className="btn btn-primary"  href="/services/application-development">More Info</a>
              </div>
            </div>
            <div className="responsive-section-img" style={{ width: "36%", margin:" 40px 0"}}>
              <img src={logo} className="card-img-top" alt="home-img" style={{ width: "100%", height:"350px"}} />
            </div>
        </div>
        <HomeCard />
        <Slider />
      </div>
    )
}