import {Card} from 'react-bootstrap';
import './Team.css';
import linkedin from '../../images/linkedin.png'
const Member = ({img,alt,name,role,desc}) => {
    return ( 
        <div className=" col-12 col-md-4 mb-3">
             <Card className='cardTeam mb-3'>
                        <Card.Header style={{ backgroundColor: "white" ,position:"relative",borderBottom: "1px solid #000000"}}>
                            <div className="d-flex align-items-end gap-3 pb-3">
                                <img src={img} alt={alt} />
                                <div className="d-flex flex-column">
                                    <span className='member'>{name}</span>
                                    <span className='role'>{role}</span>
                                </div>
                                <img src={linkedin} alt="" style={{position:'absolute',top:"0%",right:"0%"}}/>
                            </div>

                        </Card.Header>
                        <Card.Body>
                            <Card.Text className='desc pt-3 pb-2'>
                                {desc}
                            </Card.Text>
                        </Card.Body>
                    </Card>
        </div>
     );
}
 
export default Member;