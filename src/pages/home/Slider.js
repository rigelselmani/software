
import CarpetDesk from "../../images/desktop-carpet.png"

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
                 <img src={CarpetDesk} className="pb-3" alt="..." style={{height:"500px",width:"70%", borderRadius:"10px"}}/>
                 <h5>First slide label</h5>
                 <a className="text-white seeApp-home" href="https://carpet-64b3e.firebaseapp.com/">See App</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
            <div className="carousel-item active">
              <div className=" bg-secondary" alt="..."  style={{height:"650px"}}>
                <div className="position-relative carousel-caption d-none d-md-block p-3">
                <img src={CarpetDesk} className=" mt-3 pt-3 d-block w-10" alt="..." style={{height:"500px",width:"60%", borderRadius:"10px"}}/>
                  <h5>Pure Carpet</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
            </div>
        </div>
        <div className="carousel-item">
            <div className="carousel-item active">
              <div className=" bg-secondary" alt="..."  style={{height:"650px"}}>
                <div className="position-relative carousel-caption d-none d-md-block p-3">
                <img src={CarpetDesk} className=" mt-3 pt-3 d-block w-10" alt="..." style={{height:"500px",width:"60%", borderRadius:"10px"}}/>
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
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