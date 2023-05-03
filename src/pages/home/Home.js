import "./Home.css"
import logo from "../../images/reponsive-design.jpg"

export default function Home(){

    return(
      <div>
        <div className="home-content d-flex flex-row justify-content-center">
            <div className="home-section text-start" style={{width: "48%",margin:"90px 0 0 0"}}>
              <div className="" style={{marginLeft:"42%"}}>
                <h5 className="card-title mb-1 ">Mobile First</h5>
                <p className="p-text mb-0">Responsive design & Development</p>
                <p className="p-text">Make your Website & App work on desktop tablet mobile</p>
                <button className="info-btn">More Info</button>
              </div>
            </div>
            <div className="responsive-section-img m-5" style={{ width: "40%"}}>
            <img src={logo} className="card-img-top" alt="home-img" style={{ width: "100%", height:"350px"}} />
            </div>
        </div>
        <p className=" home-p-inovative p-4 fs-4 mx-auto justify-content-center" style={{width:"65%", }}>We deliver innovative solutios for enterprise to stay agile, competitive, operationally lean, and empowers them to do MORE.</p>
      </div>
    )
}