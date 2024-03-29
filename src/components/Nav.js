import "./Nav.css"


export default function  Nav (){

    return (
    <nav className="navbar navbar-expand-lg container d-flex flex-column bg-white sticky-top  pt-0">
          <div className=" links contact-nav container-fluid d-flex flex-row justify-content-between text-bg-light m-0">
            <div className="email-contactNav">
               <a className="email-contac" href="mailto: rigel.selmani@gmail.com">Rigel.selmani@gmail.com</a>
            </div>
            <div className=" social-media-contact-nav px-5">
               <a className="icon px-1 text-secondary" href="https://www.google.com/"><i className="ti ti-brand-google"></i></a>
               <a className="icon px-1 text-secondary" href="https://www.facebook.com/"><i className="ti ti-brand-facebook-filled"></i></a>
               <a className="icon px-1 text-secondary" href="https://twitter.com/"><i className="ti ti-brand-twitter-filled"></i></a>
            </div>
          </div>
          <div className="container-fluid">
                <a className="navbar-brand text-primary fs-3 fst-italic " href="/"><span className="text-bg-dark px-4 m-0 rounded-3">Software</span> Services</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse text-dark display-flex justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-secondary" aria-current="page" href="/">HOME</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-secondary" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    SERVICES
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/services/design">UI / UX Design</a></li>
                    <li><a className="dropdown-item" href="/services/web-development">Web Development</a></li>
                    <li><a className="dropdown-item" href="/services/cloud-back-end"> Cloud BackEnd Server</a></li>
                    <li><a className="dropdown-item" href="/services/digital-marketing">Digital Marketing</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="/about">ABOUT US</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="/contact">CONTACT US</a>
                </li>
                <a className="nav-link phone text-primary fs-3 pt-0" href="tel:7038706927"><span className="material-symbols-outlined pt-0 fs-3" >
                    phone_in_talk
                   </span></a>
              </ul>
            </div>
          </div>
        </nav>
    )
}

