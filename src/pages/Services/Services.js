import { useParams } from 'react-router-dom'
import Design from './design/Design'
import WebDev from './web-dev/Web-dev'
import Cloud from './cloud/Cloud'
import DigitalMarketing from './digital-marketing/Digital-marketing'


export default function Services(){
    const {id}=useParams()
    if(id==="design"){
     return (<div className="design"><Design /></div>   
     )}if(id === "web-development"){
         return( <div className="web-development"><WebDev /></div>)
     }if(id === "cloud-back-end"){
        return( <div className="cloud-back-end"><Cloud /></div>)
    }if(id === "digital-marketing"){
        return(<div className="digital-marketing"><DigitalMarketing/></div>)
    }else{
        return (  
        <div>
           <Design/>
           <WebDev />
        </div>
        )
     }
}