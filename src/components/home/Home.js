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
        borderBottom: '8px solid rgb(25, 175, 125)'
    };
    return(
        <div>
            <div style={myStyle}>
                 <h1>......... Software</h1>
                 <button className="start-btn">Get Started</button>
                 <button className="services-btn">Our Services</button>
            </div>
            <div className="consult-services">
                 <h5>........... Software is a consultancy working with companies seeking knowledge and support from software developers and engineers, data scientists, and product development teams located in the United States and Canada. Mosaic Software offers technical and business expertise to convert your strategies into software systems that optimize your business performance.</h5>
                 <h2>What we do</h2>
                 <h6>Our team provides a wealth of professional software capabilities
                 to bring your innovative ideas to life.
                 learn more </h6>
            </div>
            <div className="details">
                <div className="product-details">
                    <span class="material-symbols-outlined">
                       app_shortcut
                    </span>
                    <p>We help turn your ideas into reality with our elite team of business analysts, project managers, developers, and engineers who will guide you through the entire process of building a software product. We have substantial experience developing custom software solutions incorporating machine learning and other algorithms. Our full-stack development combined with a deep understanding of how companies work to make us the perfect development partner</p>
                </div>
            </div>
       
        </div>
    )
}