import './Services.css';
import { Card } from 'react-bootstrap';
import { MdArrowOutward } from "react-icons/md";
const Services = ({services}) => {
    return (
        <div className="container ps-4 ps-md-5 pt-2 pt-md-5  mt-5" id="services">
            <div className='d-flex flex-column flex-md-row align-items-center align-items-md-start gap-4 gap-md-5 pb-5'>
                <h2 className='studiesH2 px-2 text-center servicesH2'>Services</h2>
                <div className="d-md-flex flex-md-column">
                    <span className='servicesSpan'>At our digital marketing agency, we offer a range of services to</span>
                    <span className='servicesSpan'> help businesses grow and succeed online. These services include:</span>
                </div>
            </div>
            <div className="row">
                {services.map((service)=>(
                    <div key={service.id} className=" col-12 col-md-6 mb-3">
                    <Card className='cardService mb-3 px-4 py-4 py-md-5' style={{backgroundColor:`${service.background_color}`}}>
                        <Card.Body>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="d-flex flex-column justify-content-between gap-5">
                                            <div className="d-flex flex-column mb-4">
                                                <span className='serviceName px-1' style={{ backgroundColor: `${service.name_background_color}` }}>{service.name}</span>
                                                <span className='serviceName px-1' style={{ backgroundColor: `${service.name_background_color}` }}>{service.name2}</span>
                                            </div>
                                            <div className="d-flex gap-3 align-items-center mt-2 d-none d-md-block">
                                                <button className="serviceBtn" style={{backgroundColor:`${service.link_color}`}}> <MdArrowOutward size={28} style={{color: service.link_color === "#000000" ? "#B9FF66" : "#000000"}}/> </button>
                                                <a href='/more' className='serviceLink ' style={{color:`${service.link_color}`}}> Learn more</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="d-flex justify-content-between align-items-end d-block d-md-none">
                                        <button className="serviceBtn" style={{backgroundColor:`${service.link_color}`}}> <MdArrowOutward size={28} style={{color: service.link_color === "#000000" ? "#B9FF66" : "#000000"}}/> </button>
                                        <img src={service.img} alt={service.name} className='img-fluid'/>
                                        </div>
                                        <img src={service.img} alt={service.name} className='img-fluid d-none d-md-block'/>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Services;