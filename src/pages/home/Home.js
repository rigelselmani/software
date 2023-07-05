import "./Home.css"
import logo from "../../images/SOFTWARE.jpg"
import HomeCard from "./HomeCard"
import ContactForm from "../ContactForm/Contact-form.js"

export default function Home(){

    return(
      <div>
        <div className="home-content d-flex flex-row justify-content-center">
            <div className="home-section text-start">
                <h5 className="home-title " >HANDCRAFTED DIGITAL PRODUCTS</h5>
                <p className="home-text">YOUR PARTNER IN MOBILE & WEB ENGINEERING.</p>
                <a className="btn btn-primary"  href="/services/application-development">More Info</a>
            </div>
              <img src={logo} className="card-img m-3 rounded" alt="home-img"  />
        </div>
        <HomeCard />
        <ContactForm/>
      </div>
    )
}