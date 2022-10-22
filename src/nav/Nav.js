import "./Nav.css"

export default function  Nav (){

    return <div>
            <nav className="navbar navbar-expand-lg">
               <div className="container-md">
                 <a className="navbar-brand" href="/">HOME</a>
                 <button className="navbar-toggler justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                       <a className="nav-link" aria-current="page" href="/about">ABOUT US</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="/services">SERVICES.ser</a>
                     </li>
                     <li className="nav-item">
                       <a className="nav-link" href="/contact">Contact US</a>
                     </li>
                   </ul>
                   <form className="d-flex" role="search">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                     <button className="btn btn-outline-success" type="submit">Search</button>
                   </form>
                 </div>
               </div>
            </nav>
        </div>
}

