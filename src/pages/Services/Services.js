import { useParams } from 'react-router-dom'
import Design from './design/Design'
import Mobile from './mobile/Mobile-dev'
import WebDev from './web-dev/Web-dev'
import Cloud from './cloud/Cloud'
import AppMaintenance from "./appMaintenance/AppMaintenance"


export default function Services(){
    const {id}=useParams()
    if(id==="design"){
     return (<div className="design"><Design /></div>   
     )}if(id==="mobile-app-development"){
         return(<div className="mobile-app-development"><Mobile /></div>)
     }if(id === "web-development"){
         return( <div className="web-development"><WebDev /></div>)
     }if(id === "cloud-back-end"){
        return( <div className="cloud-back-end"><Cloud /></div>)
    }if(id === "app-maintenance"){
        return( <div className="app-maintenance"><AppMaintenance /></div>)
    }else{
        return (  
        <div>
           <Design/>
           <WebDev />
           <Mobile />
        </div>
        )
     }
}