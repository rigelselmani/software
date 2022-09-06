import background from "../../images/globe2.jpg"

import "./Home.css"
export default function Home(){

    const myStyle={
        backgroundImage: `url(${background})`,
        height:'100vh',
        marginTop:'-70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderBottom: '8px solid rgb(11, 56, 41)'
    };
    return(
        <div>
            <div style={myStyle}>
                 <h1>Next Generation Software</h1>
                 <button className="start-btn">Get Started</button>
                 <button className="services-btn">Our Services</button>
            </div>
            <div className="consult-services">

            </div>
       
        </div>
    )
}