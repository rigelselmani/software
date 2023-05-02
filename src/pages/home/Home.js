import "./Home.css"
import logo from "../../images/reponsive-design.jpg"

export default function Home(){

    return(
        <div className="home-content d-flex flex-row justify-content-center">
            <div className="home-section text-start" style={{width: "48%",margin:"90px 0 0 0"}}>
              <div className="" style={{marginLeft:"34%"}}>
                <h5 className="card-title mb-1">Mobile First</h5>
                <p className="home-text mb-0">Responsive design & Development</p>
                <p className="home-text">Make your Website & App work on desktop tablet mobile</p>
              </div>
            </div>
            <div className="" style={{ width: "40%"}}>
            <img src={logo} className="card-img-top" alt="home-img" style={{ width: "100%", height:"350px"}} />
            </div>
        </div>
    )
}