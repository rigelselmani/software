import SocialMedia from "../../../images/social-media.webp"
import SocialImg from "../../../images/social.jpg"


export default function HomeCard(){
    return (
    <div className="container">  
      <div className="card-box my-4 pb-5">
        <div className="card-home bg-light px-2">
          <h5 className="card-title mb-4">KEYWORD RESEARCH</h5>
          <div className="card-body p-0">
            <p className="card-text">We work with you to determine what keywords you should go after and which ones will benefit you the most. After doing competitor research we develop a strategy to help you rank for those determined keywords</p>
          </div>
        </div>
        <div className="card-home bg-light  px-2">
          <h5 className="card-title mb-4">BLOG WRITING STRATEGY</h5>
          <div className="card-body p-0">
            <p className="card-text">One of the many ways to increase your authority for a specific keyword is to create a blog strategy around it. We’ll help you come up with relevant blog topics get the ball rolling.</p>
          </div>
        </div>
        <div className="card-home bg-light px-2">
          <h5 className="card-title mb-4">ON PAGE OPTIMIZATION</h5>
          <div className="card-body d-flex flex-column p-0 ">
            <p className="card-text">Even if your site was built with SEO in mind, as content gets updated or added you need to optimize it for SEO. Let us go through your content and make sure that each page is built out with best practices in mind.</p>
          </div>
        </div>
      </div>  

      <hr></hr>
      <div className="card my-5 border-0">
            <div className="row g-0">
                  <div className="col-lg-6 col-sm-12">
                     <div className="card-body text-start">
                     <h5 className="card-title text-primary">Social Media Management</h5>
                     <h5 className="card-text text-secondary">YOUR AUDIENCE IS ON SOCIAL MEDIA, AND YOU SHOULD BE TOO!</h5>
                     <p className="card-text text-secondary">Looking to engage with your audience, stay top of mind, and meet people where they’re at then you need to have a social media strategy.</p>
                     </div>
                     <img src={SocialImg} className="img-fluid rounded" alt="mobile-dev"/>
                  </div>
                <div className="col-lg-6 col-sm-12">
                   <img src={SocialMedia} className="img-fluid rounded" alt="mobile-dev" />
                </div>
            </div>
      </div>
      <h3>KEYS TO SUCCESSFUL SOCIAL MEDIA MANAGEMENT</h3>
      <div className="card-box my-4 pb-5">
        <div className="card-home bg-light px-2">
          <h5 className="card-title mb-4">STRATEGY</h5>
          <div className="card-body p-0">
            <p className="card-text">Posting without a strategy is the kiss of death. You have to know what you’re trying to achieve so you can post accordingly and reach your goals. We can help you think through the when, where, why, and how.</p>
          </div>
        </div>
        <div className="card-home bg-light  px-2">
          <h5 className="card-title mb-4">CONSISTENCY</h5>
          <div className="card-body p-0">
            <p className="card-text">Consistency is key! Consistency in when you post, where you post, and what you post make a huge difference. Consistency isn’t hard, but it takes time and effort. Let us take that effort off your plate.</p>
          </div>
        </div>
        <div className="card-home bg-light px-2">
          <h5 className="card-title mb-4">FLEXIBILITY
</h5>
          <div className="card-body d-flex flex-column p-0 ">
            <p className="card-text">The digital world isn’t stagnant and your strategy shouldn’t be either. If something isn’t working try something new. Be flexible and make adjustments. We help you stay on top of the trends and let you know when it’s time to pivot.</p>
          </div>
        </div>
      </div>  
    </div>
    )
}