import { useParams } from 'react-router-dom'
import AppDev from './appdev/Appdev'
import Sharepoint from './sharepoint/Sharepoint'
import Cloud from './cloud/Cloud'


export default function Services(){
    const {id}=useParams()
    if(id==="appdev"){
     return (
      <div className="App-dev">
          <AppDev />
      </div>   
     )}if(id==="sharepoint"){
         return(<div className="sharepoint"><Sharepoint /></div>)
     }if(id === "cloud"){
         return( <div className="cloud"><Cloud /></div>)
     }else{
        return (  
        <div>
           <AppDev/>
           <Sharepoint />
           <Cloud />
        </div>
        )
     }
}