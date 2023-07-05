import Contact from "../../ContactForm/Contact-form"
import Design from "../../../images/design.jpg"
import Seo from "../../../images/seo.jpg"
import DigitalCard from "../../../pages/Services/digital-marketing/DigitalCard"

export default function DigitalMarketing (){
    return (
        <div>
              <div className="text-start design-header">
               <h1>Digital marketing</h1>
               <p className="p-header">Online marketing, promotion of brands</p>
               <p className="p-header">connect with customers using the internet</p>
               <button className="req-quote-btn">Request Quote</button>
              </div>
              <img className="app-img" src={Design} alt="App-img" />
             <div className="container"> 
                 <h1 className="text-bold">Digital World</h1>
              <div className="card my-5 border-0">
               <div className="row g-0">
                 <div className="col-lg-6 col-sm-12">
                   <img src={Seo} className="img-fluid rounded" alt="mobile-dev" />
                 </div>
                   <div className="col-lg-6 col-sm-12">
                     <div className="card-body text-start">
                     <h5 className="card-title text-primary">Search Engine Optimization</h5>
                     <p className="card-text text-secondary">Ever wondered how the websites on the first page of a Google search get that spot? The answer is Search Engine Optimization.</p>
                     <p className="card-text text-secondary">SEO is the long-game strategy for increasing your website’s search rankings organically. SEO starts with a well-built website and spreads to your blog strategy, your social media strategy, and more.</p>
                     <p className="card-text text-secondary">As more and more people head to Google to find companies that meet their needs, you’ll want to make sure you’ve got that top spo</p>
                     </div>
                   </div>
                 </div>
               </div>
               <DigitalCard />
              </div>
              <Contact />
        </div>
    )
}