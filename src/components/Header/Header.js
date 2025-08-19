import './Header.css';
import { Button } from 'react-bootstrap';
import illustration from '../../images/Illustration.png'
const Header = () => {
    return (
        <div className="container mb-5 mt-2 mb-md-3 mt-md-3">
            <div className="row">
                <div className="col-12 col-md-6 ps-3 ps-md-5 d-flex flex-column gap-4 gap-md-5">
                    <h1 className='header1'>Navigating the digital landscape for success</h1>
                    <img src={illustration} alt="" className='img-fluid d-block d-md-none' />
                    <p className='headerP'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                    <Button size='lg' variant='dark' className='bookBtnSize py-3'><span className='bookBtn'>Book a consultation</span></Button>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center d-none d-md-block">
                    <img src={illustration} alt="" className='img-fluid' />
                </div>
            </div>
        </div>);
}

export default Header;