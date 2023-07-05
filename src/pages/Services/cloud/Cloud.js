import Design from "../../../images/design.jpg"
import Nodejs from "./../../../images/node.webp"
import Aws from "./../../../images/aws.jpg"
import MongoFirebase from "./../../../images/mongo&firebase.jpg"




export default function Cloud(){
    return(
        <div>
           <div className="text-start design-header">
               <h1>CLOUD BACKEND DEVELOPMENT</h1>
               <p className="p-header">Mobile And Web Apps</p>
               <p>Scalable, Robust, Efficient Amazon, Azure, Hadoop</p>
               <button className="req-quote-btn">Request Quote</button>
          </div>
          <img className="app-img" src={Design} alt="App-img" />
          <div className="container"> 
             <div className="py-3">
               <h1 className="text-bold">Backend Server Developers.</h1>
               <p className=" text-start">Business today is enduring constant change, and mobile access to information, communication, and applications is no exception. At Simpalm, we keep abreast of changing demands and opportunities, so that we can deliver the application features and performance our clients need to succeed. When it comes to mobile applications, websites, and web services, success is nearly always dependent on effective backend server support. Simpalm’s backend server development capabilities enable us to ensure that our clients’ mobile and web applications smoothly and efficiently retrieve and deliver the data apps need to provide real value to users and businesses.</p>
              <p className=" text-start">Simpalm is a leader in backend server development in the U.S., thanks to our highly experienced development team’s in-depth knowledge of required programming languages and frameworks. Our design teams make our apps and websites beautiful and fun to use, but our backend developers provide power, agility, and dependability. Because of Simpalm designs applications and backend server support in tandem, you’ll know they will work together securely, effectively, and efficiently.  </p>
              <p className=" text-start">Simpalm’s backend server development expertise enables us to confidently advise you on the appropriate location for your server, helping you to choose between a cloud-based service, or other hosted solution. The following are some of our favorite and most popular solutions.</p>
             </div> 
             <hr></hr>
             <div className="card my-5 border-0">
               <div className="row g-0">
                 <div className="col-md-6">
                   <img src={Nodejs} className="img-fluid rounded" alt="mobile-dev" />
                 </div>
                 <div className="col-md-6">
                   <div className="card-body text-start">
                     <h5 className="card-title text-primary">Node.JS Database Development</h5>
                     <p className="card-text text-secondary">We have expertise in using a combination of Node.JS server-side programming and the revolutionary MongoDB database to build data-driven applications such as chat engines, real-time data streaming, stock market and other similar applications that can efficiently handle increasing amounts of workload and traffic in a sustainable manner.</p>
                   </div>
                 </div>
               </div>
            </div>
            <hr></hr>
             <div className="card my-5 border-0">
               <div className="row g-0">
                 <div className="col-md-6">
                   <img src={Aws} className="img-fluid rounded"  alt="mobile-dev" />
                 </div>
                 <div className="col-md-6">
                   <div className="card-body text-start">
                     <h5 className="card-title text-primary">Amazon Web Services</h5>
                     <p className="card-text text-secondary">An affordable and dependable provider of cloud-based web services for more than a decade, Simpalm has considerable experience in using AWS for backend server support.</p>
                     <p className="bold">Simpalm has expertise in following AWS Services</p>
                       <ul>
                        <li>Amazon Lambda compute services to build mobile & web apps Mobile SDKs for iOS and Android</li>
                        <li>Amazon DynamoDB to provide a scalable and low-latency online database based on NoSQL.</li>
                        <li>Amazon Relational Database Services</li>
                        <li>Push Notification, SES, Cognito and API Gateway</li>
                       </ul>
                   </div>
                 </div>
               </div>
            </div>  
            <hr></hr>
            <div className="card my-5 border-0">
               <div className="row g-0">
               <div className="col-md-6">
                   <img src={MongoFirebase} className="img-fluid rounded"  alt="mobile-dev" />
                 </div>
                 <div className="col-md-6">
                   <div className="card-body text-start">
                     <h5 className="card-title text-primary">MongoDB & Firebase</h5>
                     <p className="card-text text-secondary">An affordable and dependable provider of cloud-based web services for more than a decade, Simpalm has considerable experience in using AWS for backend server support.</p>
                     <p className="bold">Simpalm has expertise in following AWS Services</p>
                       <ul>
                        <li>Amazon Lambda compute services to build mobile & web apps Mobile SDKs for iOS and Android</li>
                        <li>Amazon DynamoDB to provide a scalable and low-latency online database based on NoSQL.</li>
                        <li>Amazon Relational Database Services</li>
                        <li>Push Notification, SES, Cognito and API Gateway</li>
                       </ul>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
    )
}