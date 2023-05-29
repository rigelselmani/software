export default function Map(){
    
  
    return (
        <div className="mapouter mt-5 ">
            <h3 className="mb-4 ">Office & Contact Info...</h3>
            <div className="gmap_canvas ">
                <iframe className="col-lg-9 col-md-9 "  height="300" id="gmap_canvas" title="map" src="https://maps.google.com/maps?q=654%20Fort%20Evans%20Rd%20NE&t=&z=13&ie=UTF8&iwloc=&output=embed">
                </iframe>
            </div>
            <p className="fs-3 text">654-C Fort Evans Rd NE Leesburg, VA, 20176</p>
        </div>
    )
}