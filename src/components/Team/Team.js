import './Team.css';
import john from '../../images/john.png';
import brian from '../../images/brian.png';
import emily from '../../images/emily.png';
import jane from '../../images/jane.png';
import michael from '../../images/michael.png';
import sarah from '../../images/sarah.png';

import Member from './Member';
import { Button } from 'react-bootstrap';
const Team = () => {
    return (
        <div className="container px-3 ps-md-5 py-5 mb-5 my-md-5">
            <div className='d-flex flex-column flex-md-row text-center gap-4 gap-md-5 pb-4 pb-md-5 mb-md-3'>
                <h2 className='studiesH2 px-2'>Team</h2>
                <p className='studiesP' style={{ maxWidth: "35%" }}>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
            </div>
            <div className="row ">
                <Member img={john} alt='john' name='John Smith' role='Ceo and Founder' desc='10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy' />
                <Member img={jane} alt='jane' name='Jane Doe' role='Director of Operations' desc='7+ years of experience in project management and team leadership. Strong organizational and communication skills' />
                <Member img={michael} alt='michael' name='Michael Brown' role='Senior SEO Specialist' desc='5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization' />
                <Member img={emily} alt='emily' name='Emily Johnson' role='PPC Manager' desc='3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis' />
                <Member img={brian} alt='brian' name='Brian Williams' role='Social Media Specialist' desc='4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement' />
                <Member img={sarah} alt='sarah' name='Sarah Kim' role='Content Creator' desc='2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries' />
            </div>
            <div className="d-flex justify-content-end">
                <Button size='lg' variant='dark' className='teamBtnSize py-3'><span className='bookBtn'>See all team</span></Button>
            </div>
        </div>
    );
}

export default Team;