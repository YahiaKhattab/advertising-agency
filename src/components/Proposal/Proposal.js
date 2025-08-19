import illustration2 from '../../images/Illustration2.png';
import {Button} from 'react-bootstrap';
import './Proposal.css'
const Proposal = () => {
    return (
        <div className="container ps-3 ps-md-5 pb-5">
            <div className='mx-2 py-3 my-5 ' style={{ backgroundColor: "#F3F3F3", borderRadius: "45px" ,position:'relative'}}>
                <div className="row d-flex justify-content-between">
                <div className=" col-12 col-md-6">
                    <div className="d-flex flex-column justify-content-center gap-4 p-5">
                        <h3 className='proposalH3'>Let's make things happen</h3>
                    <p className='proposalP me-md-5'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                    <Button size='lg' variant='dark' className='bookBtnSize py-3'><span className='bookBtn'>Get your free proposal</span></Button>
                    </div>  
                </div>
                <div className="col-6 d-none d-md-block" style={{position:"absolute",left:"60%",top:"-8%"}}>
                    <img src={illustration2} alt="" />
                </div>
            </div>
            </div>
            
        </div>);
}

export default Proposal;