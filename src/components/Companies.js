import amazon from '../images/amazon.png';
import dribbble from '../images/dribbble.png';
import hubspot from '../images/hubspot.png';
import notion from '../images/notion.png';
import netflix from '../images/netflix.png';
import zoom from '../images/zoom.png';
const Companies = () => {
    return ( 
    <div className="containter px-3 px-md-5 py-md-4 mx-md-5 my-md-5">
        <div className="row ">
            <div className="col-4 col-md-2 d-flex justify-content-center">
                <img src={amazon} alt="amazon" className='img-fluid'/>
            </div>
            <div className="col-4 col-md-2 d-flex justify-content-center">
                <img src={dribbble} alt="dribbble" className='img-fluid'/>
            </div>
            <div className="col-4 col-md-2 d-flex justify-content-center">
                <img src={hubspot} alt="hubSpot" className='img-fluid'/>
            </div>
            <div className="col-4 col-md-2 d-flex justify-content-center">
                <img src={notion} alt="notion" className='img-fluid'/>
            </div>
            <div className="col-4 col-md-2 d-flex justify-content-center">
                <img src={netflix} alt="netflix" className='img-fluid'/>
            </div>
            <div className="col-4 col-md-2 d-flex justify-content-center">
                <img src={zoom} alt="zoom" className='img-fluid'/>
            </div>
        </div>
    </div> );
}
 
export default Companies;