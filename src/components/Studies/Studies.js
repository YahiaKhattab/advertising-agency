import { Link } from 'react-router-dom';
import './Studies.css';
import { MdArrowOutward } from "react-icons/md";
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Studies = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        !isMobile ? <div className="container ps-5 py-5 mb-5" id="cases">
            <div div className='d-flex flex-column flex-md-row text-center gap-5 pb-5' >
                <h2 className='studiesH2 px-2'>Case Studies</h2>
                <p className='studiesP'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
            </div >
            <div className="container py-5" style={{ backgroundColor: "#191A23", borderRadius: "45px" }}>
                <div className="row py-5 px-5">
                    <div className="col-4 px-5" style={{ borderRight: "1px solid #FFFFFF" }}>
                        <p className='studiesP2'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                        <Link className='studiesLink'>Learn More <MdArrowOutward color=' #B9FF66' size={28} /></Link>
                    </div>
                    <div className="col-4 px-5" style={{ borderRight: "1px solid #FFFFFF" }}>
                        <p className='studiesP2'>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                        <Link className='studiesLink'>Learn More <MdArrowOutward color=' #B9FF66' size={28} /></Link>
                    </div>
                    <div className="col-4 px-5">
                        <p className='studiesP2'>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                        <Link className='studiesLink'>Learn More <MdArrowOutward color=' #B9FF66' size={28} /></Link>
                    </div>
                </div>
            </div>
        </div > :
            <div className="container ps-4 pt-5 " id="cases">
                <div div className='d-flex flex-column flex-md-row text-center gap-4 gap-md-5 align-items-center align-items-md-start' >
                    <h2 className='studiesH2 px-2 caseH2'>Case Studies</h2>
                    <p className='studiesP'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
                </div >
                <div className="container " style={{ borderRadius: "15px", position: 'relative' }}>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="d-flex">
                            <button className="swiper-button-prev-custom me-3">
                                <ArrowLeftShort size={30} />
                            </button>
                            <button className="swiper-button-next-custom">
                                <ArrowRightShort size={30} />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom'
                        }}
                        modules={[Navigation]}
                        breakpoints={{
                            768: { slidesPerView: 1 },
                            900: { slidesPerView: 2, spaceBetween: 10 },
                            1200: { slidesPerView: 3, spaceBetween: 30 }
                        }}
                        className="px-0 pb-4"
                    >
                        <SwiperSlide key={0} style={{ backgroundColor: "#191A23", borderRadius: "45px" }}>
                            <div className=" p-5" style={{ borderRight: "1px solid #FFFFFF" }}>
                                <p className='studiesP2'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
                                <Link className='studiesLink'>Learn More <MdArrowOutward color=' #B9FF66' size={28} /></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide key={0} style={{ backgroundColor: "#191A23", borderRadius: "45px" }}>
                            <div className=" p-5" style={{ borderRight: "1px solid #FFFFFF" }}>
                                <p className='studiesP2'>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
                                <Link className='studiesLink'>Learn More <MdArrowOutward color=' #B9FF66' size={28} /></Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide key={0} style={{ backgroundColor: "#191A23", borderRadius: "45px" }}>
                            <div className=" p-5" style={{ borderRight: "1px solid #FFFFFF" }}>
                                <p className='studiesP2'>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
                                <Link className='studiesLink'>Learn More <MdArrowOutward color=' #B9FF66' size={28} /></Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
    );
}

export default Studies;