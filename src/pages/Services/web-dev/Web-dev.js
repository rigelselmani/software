import Contact from "../../ContactForm/Contact-form"

import Mern from "../../../images/mern-stack.jpg"
import AppScreen from "./../../../images/mobile-design.jpg"
import IosAndrWIND from "./../../../images/ios-andr-wind.jpg"
import Design from "../../../images/design.jpg"

export default function Webdev(){
        return (  
        <div>
            <div className="text-start design-header">
               <h1>USING WEB TECHNOLOGIES TO SOLVE PROBLEMS</h1>
               <p className="p-header">JAVASCRIPT, Reactjs AND NodeJS</p>
               <button className="req-quote-btn">Request Quote</button>
          </div>
            <img className="app-img" src={Design} alt="App-img" />
        <div className="container"> 
           <div className="p-3 mx-5">
              <h1 className="text-bold">Web Design and Development Services</h1>
              <p className="px-5">SoftwareSolution has top web designers in the USA, with 4+ years of experience in design and development of websites and web based applications.  We design mobile responsive web using the latest technologies, including HTML5, CSS3, and JavaScript. Furthermore, we combine our strengths in new technology with the knowledge of Nodejs and MERN Stack to build websites of any scale, size and domain. The following describes our strengths in specific web technologies:</p>
           </div>   
           <div className="card my-4 border-0 px-5"  style={{maxWidth:"540px;"}}>
                 <div className="row g-0">
                   <div className="col-md-6">
                     <img src={AppScreen} className="img-fluid rounded" alt="mobile-dev" />
                   </div>
                   <div className="col-md-6">
                     <div className="card-body text-start">
                       <h5 className="card-title text-primary">JavaScript</h5>
                       <p className="card-text text-secondary">This programming language is a dynamic, interpreted and object-oriented programming language. Also, JavaScript is used to add dynamic and interactive elements to websites. This is a client-side scripting language and is mostly used when you want specific code to be executed on client web browsers rather than your own servers. We can work on ReactJS, AngularJS, Node.JS, Typescript, and ExpressJS</p>
                       <p className="bold">Benefits of JavaScript Web development</p>
                       <ul>
                        <li>Client-Side Execution</li>
                        <li>Extended Functionality to Web Pages</li>
                        <li>Easy Programming</li>
                        <li>Fast, Save Time while executing the request on user processor</li>
                        <li>Versatility, Open platform</li>
                       </ul>
                     </div>
                   </div>
                 </div>
            </div>
            <div className="card my-5 border-0 px-5 " style={{maxWidth:"540px;"}}>
               <div className="row g-0">
                 <div className="col-md-6">
                   <div className="card-body text-start">
                     <h5 className="card-title text-primary">NodeJS Development</h5>
                     <p className="card-text text-secondary">We deliver end-to-end mobile solution comprise of delivering mobile strategy through implementation that aligns with client expectations and goals. Our skilled developers will build your mobile application for any or all three major platforms – iOS, Android, and Windows – and then even help you integrate them with all other enterprise systems. From quality back-end development to an elegant user interface up front, Zeurix provides end-to-end mobile solutions our competitors can’t replicate.</p>
                   </div>
                 </div>
                 <div className="col-md-6">
                   <img src={IosAndrWIND} className="img-fluid rounded" alt="mobile-dev" />
                 </div>
               </div>
            </div>
            <div className="card my-4 border-0 px-5" style={{maxWidth:"540px;"}}>
               <div className="row g-0">
                 <div className="col-md-6">
                   <img src={Mern} className="img-fluid rounded" alt="mobile-dev" />
                 </div>
                 <div className="col-md-6">
                   <div className="card-body text-start">
                     <h5 className="card-title text-primary">Develop innovative React Native, Angular, MERN Stack Application</h5>
                     <p className="card-text text-secondary">Developing a specialized is challenging, without proper experience and expertise in modern tools, frameworks, and technologies can be time-intensive and expensive. Software Solution consultants are always forefront on building a solution that leverages the cutting edge technologies such as ReactNative Angular, NodeJS Firebase, MondoDB. We have helped many businesses to modernize and migrate existing legacy applications to MERN stack to save cost, improve productivity and access information anywhere and anytime.</p>
                   </div>
                 </div>
               </div>
            </div>
        </div>
            <Contact />
        </div>
        )
     
}