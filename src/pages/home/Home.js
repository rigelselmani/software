import "./Home.css"
import logo from "../../images/reponsive-design.jpg"
import HomeCard from "./HomeCard"
import Slider from "./Slider"

export default function Home(){

    return(
      <div>
        <div className="home-content d-flex flex-row justify-content-center">
            <div className="home-section text-start m-5" style={{fontFamily:"roboto", color:"rgb(7,133,206)", width:"35%"}}>
              <div className="">
                <h5 className="home-title " >HANDCRAFTED DIGITAL PRODUCTS</h5>
                <p className="home-text">YOUR PARTNER IN MOBILE & WEB ENGINEERING.</p>
                
                <a className="btn btn-primary"  href="/services/application-development">More Info</a>
              </div>
            </div>
            <div className="responsive-section-img" >
              <img src={logo} className="card-img-top" alt="home-img" style={{ width:"130%",height:"350px"}} />
            </div>
        </div>
        <HomeCard />
        <Slider />
      </div>
    )
}