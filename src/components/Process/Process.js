import './Process.css';
import { FaPlus,FaMinus } from "react-icons/fa";
import { useContext, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useMediaQuery } from 'react-responsive';


function ContextAwareToggle({ eventKey, onToggle }) {
        const isMobile = useMediaQuery({ maxWidth: 768 });

    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey, () => {
        if (onToggle) onToggle(eventKey);
    });

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
       !isMobile? <button type="button" onClick={decoratedOnClick} className='toggleBtn'>
            {isCurrentEventKey ? <FaMinus size={28} /> : <FaPlus size={28} />}
        </button> :
        <button type="button" onClick={decoratedOnClick} className='toggleBtn'>
            {isCurrentEventKey ? <FaMinus size={20} /> : <FaPlus size={20} />}
        </button>
    );
}

const Process = () => {
    const [activeKey, setActiveKey] = useState("0");

    const handleToggle = (key) => {
        setActiveKey(prevKey => (prevKey === key ? null : key));
    };

    const accordionItems = [
        {
            key: "0",
            title: "Consultation",
            content: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            key: "1",
            title: "Research and Strategy Development",
            content: "We conduct in-depth research and develop a tailored marketing strategy aligned with your objectives and audience insights."
        },
        {
            key: "2",
            title: "Implementation",
            content: "Our team executes the plan using the latest tools, ensuring all actions are aligned with the strategic roadmap."
        },
        {
            key: "3",
            title: "Monitoring and Optimization",
            content: "We monitor performance in real-time and optimize campaigns to ensure efficiency and effectiveness."
        },
        {
            key: "4",
            title: "Reporting and Communication",
            content: "We provide clear, regular reports and maintain transparent communication throughout the engagement."
        },
        {
            key: "5",
            title: "Continual Improvement",
            content: "Using insights from previous efforts, we refine and improve strategies to keep achieving better results over time."
        },
    ];

    return (
        <div className="container px-3 ps-md-5 pt-5">
            <div className='d-flex flex-column flex-md-row text-center gap-4 gap-md-5 pb-md-5 mb-3 align-items-center align-items-md-start'>
                <h2 className='studiesH2 px-2 processH2'>Our Working Process</h2>
                <p className='studiesP' style={{ maxWidth: "25%" }}>Step-by-Step Guide to Achieving Your Business Goals</p>
            </div>

            <Accordion activeKey={activeKey} >
                {accordionItems.map(({ key, title, content }) => (
                    <Card key={key} className={`px-5 px-md-5 pt-4 mb-4 cardStyle ${activeKey === key ? 'active-card' : ''}`}>
                        <Card.Header key={key} style={{ backgroundColor: "#F3F3F3" }} className={`pb-4 ${activeKey === key ? 'active-card' : ''}`}>
                            <div className="d-flex justify-content-between align-items-center">
                                <h1 className='cardH1'>{`0${parseInt(key) + 1} `}<span className='cardSpan d-none d-md-inline'> {title}</span></h1>
                                <span className='cardSpan d-block d-md-none'> {title}</span>
                                <ContextAwareToggle eventKey={key} onToggle={handleToggle} />
                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey={key}>
                            <Card.Body className='cardBody py-4'>{content}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    
                ))}
            </Accordion>
        </div>
    );
};

export default Process;
