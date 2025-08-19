import './Footer.css';
import positivus from '../../images/positivus2.png';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Button } from 'react-bootstrap';
const Footer = () => {
    return (
        <div className="container">
            <div className="footerCont ms-md-5 p-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-end mb-5">
                    <img src={positivus} alt="positivus logo" className='img-fluid mb-5 mb-md-0' />
                    <div className="d-flex flex-column flex-md-row justify-content-between gap-4">
                        <a href="#about" className='footerLink'>About us</a>
                        <a href="#services" className='footerLink'>Services</a>
                        <a href="#cases" className='footerLink'>Use Cases</a>
                        <a href="#pricing" className='footerLink'>Pricing</a>
                        <a href="#blog" className='footerLink d-none d-md-block'>Blog</a>
                    </div>
                    <div className="d-flex justify-content-between gap-5 d-none d-md-block">
                        <TiSocialLinkedinCircular size={33} color='white' className='footerIcon me-3' />
                        <IoLogoFacebook size={28} color='white' className='footerIcon me-3' />
                        <AiFillTwitterCircle size={28} color='white' className='footerIcon' />
                    </div>
                </div>
                <div className="row pb-4 pb-md-5 mb-5" style={{ borderBottom: "1px solid #FFFFFF" }}>
                    <div className="col-12 col-md-5">
                        <div className="d-flex flex-column gap-3 footerMobContact">
                            <h4 className='footerContact'>Contact us:</h4>
                            <p className='footerP'>Email: info@positivus.com</p>
                            <p className='footerP'>Phone: 555-567-8901</p>
                            <div className="d-flex flex-column justify-content-end gap-0">
                                <span className='footerP'>Address: 1234 Main St</span>
                                <span className='footerP'>Moonstone City, Stardust State 12345</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="d-flex flex-column flex-md-row footerInput gap-4 gap-md-5 mt-4 mt-md-0">
                            <input type="email" placeholder='Email' className='footerEmail' />
                            <Button size='lg' style={{ background: " #B9FF66" }} className='footerBtnSize py-3'><span className='footerBtn'>Subscribe to news</span></Button>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex justify-content-center gap-2 d-block d-md-none mt-4">
                        <TiSocialLinkedinCircular size={33} color='white' className='footerIcon' />
                        <IoLogoFacebook size={28} color='white' className='footerIcon' />
                        <AiFillTwitterCircle size={28} color='white' className='footerIcon' />
                    </div>
                    </div>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-md-5">
                    <p className='copyright'>© 2025 Positivus. All Rights Reserved. </p><span className='policy' style={{ cursor: "pointer" }}> Privacy Policy</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;