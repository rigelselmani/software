import "./Slider.css"
import First from "../../../images/carpet-project.png"
import Second from "../../../images/second-app.jpg"
import Third from "../../../images/hvac-project.png"
export default function Slider (){
    return (
    <div id="carouselExampleCaptions" className="carousel slide p-3">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
            <div className="carousel-item active">
              <div className=" bg-secondary" alt="..."  style={{height:"650px"}}>
              <div className="d-flex flex-column carousel-caption d-none d-md-block p-3">
                 <img src={First} className="slider-img pb-3" alt="..."/>
                 <h5 className="project">Pure Carpet</h5>
                 <a className="btn-see-App text-white seeApp-home" href="https://carpet-64b3e.firebaseapp.com/">See App</a>
              </div>
              </div>
            </div>
        <div className="carousel-item">
          <div className=" bg-secondary" alt="..."  style={{height:"650px"}}>
            <div className="d-flex flex-column carousel-caption d-none d-md-block p-3">
                 <img src={Second} className="slider-img pb-3" alt="..."/>
                 <h5 className="project">Vanessa Nail SPA</h5>
                 <a className="btn-see-App text-white seeApp-home" href="https://carpet-64b3e.firebaseapp.com/">See App</a>
            </div>
          </div>
        </div>
            <div className="carousel-item">
              <div className=" bg-secondary" alt="..."  style={{height:"650px"}}>
              <div className="d-flex flex-column carousel-caption d-none d-md-block p-3">
                 <img src={Third} className="slider-img pb-3" alt="..."/>
                 <h5 className="project">Tony HVAC</h5>
                 <a className="btn-see-App text-white seeApp-home" href="https://carpet-64b3e.firebaseapp.com/">See App</a>
            </div>
              </div>
            </div>
        </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    )
}