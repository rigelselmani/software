import "./Footer.css"


export default function Footer (){
    return (
        <div className="row text-bg-dark m-0">
          <div className="col-sm-3 mb-1 mb-sm-0"></div>
          <div className="col-sm-2 mb-1 mb-sm-0">
              <div className="card-body text-start mt-4">
              <a className="navbar-brand text-primary fs-3 fst-italic " href="/"><span className="text-bg-dark m-0 rounded-3">Software</span> Services</a>
                <p className="card-text">Address:<br/> 807 Edwards <br/> Ferry Road NE <br/> Leesburg, VA, 20176</p>
                <a className="email-contac" href="mailto: rigel.selmani@gmail.com">Rigel.selmani@gmail.com</a>
              </div>
          </div>
          <div className="col-sm-2">
              <div className="card-body d-flex flex-column text-start mt-4">
                <h5 className="card-title">Technologies</h5>
                <i className="tech-logo ti fs-1 ti-brand-javascript text-warning d-flex flex-row "><p className="fs-3 mb-1 text-white mt-1"> JAVASCRIPT</p></i>
                <i className="tech-logo ti fs-1 ti-brand-react text-primary d-flex flex-row "><p className="fs-3 mb-1 text-white mt-1"> REACTJS</p></i>
                <i className="tech-logo bootstrap ti fs-1 ti-brand-bootstrap d-flex flex-row "><p className="fs-3 mb-1 text-white mt-1">BOOTSTRAP</p></i>
                <i className="tech-logo-html fs-1 ti ti-brand-html5 d-flex flex-row "><p className="fs-3 mb-1 text-white mt-1"> HTML</p></i>
              </div>
          </div>
          <div className="col-sm-2">
            <div className="card-body d-flex flex-column text-start my-4">
              <h5 className="card-title text-dark">.</h5>
              <i className="tech-logo ti fs-1 ti-brand-firebase text-warning d-flex flex-row "><p className="fs-3 mb-1 text-white mt-1"> FIREBASE</p></i>
              <i className="tech-logo ti fs-1 ti-brand-mongodb text-success d-flex flex-row "><p className="fs-3 mb-1 text-white mt-1"> MONGODB</p></i>
              <i className="tech-logo fs-1 ti ti-brand-office text-primary d-flex flex-row "><p className="fs-3 mb-1 text-white mt-1"> OFFICE 365</p></i>
              <i className="tech-logo fs-1 text-primary ti ti-brand-css3 d-flex flex-row "><p className="fs-3 mb-1 text-white mt-1"> CSS</p></i>
            </div>
          </div>
          <div className="col-sm-3 mb-3 mb-sm-0"></div>
        </div>
    )
}