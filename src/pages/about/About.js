import AppImg from "../../images/Mobile App Developer.png"
export default function About(){
    return(
        <div className="container">
            <img className="app-img" src={AppImg} alt="App-img" />
            <div className="text-start">
                <h3>Who are we...</h3>
                <p>Zeurix is a women owned business. We strongly believe in the philosophy that technology should not hinder our abilities to complete our task and empower us to do MORE with ease and in the most efficient manner.</p>
                <p>We have proven experience of designing complex and innovative solutions across Mobile, Cloud, Collaboration and Custom Application solutions. With its idea combination of business and technology skills, and diverse team of Cloud and SharePoint Architects, developers and designers having a track record of delivering exceptional results can help you develop the IT strategy to unprecedented position, and energize your business to become part of the technology revolution, and adapt a new generation of web, mobile, collaboration and cloud solutions to gain strategic advantages and improve efficiencies.</p>
                <h3>Our Difference....</h3>
                <p>Proven experience in developing and architecting innovative solutions for Mobile, HTML 5, AngularJS, Bootstrap, iOS, Microsoft Cloud Computing Azure Platform, Hybrid Cloud, Microsoft SharePoint and Office 365. Please review our case studies that depicts are expertise in each of these technologies.</p>
                <p>We leverage Microsoft Application Development Life Cycle (ALM), SCRUM, Microsoft Visual Studio Team services and Azure DevOps to deliver quality products and on time and under budget.</p>
                <p>In-house Design and User Experience (UX) Teams to deliver modern, intuitive and immersive experience for Mobile, Tablet and Desktop.</p>
            </div>
        </div>
    )
}