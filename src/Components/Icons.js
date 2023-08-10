import React from 'react'
import bulb from '../Images/bulb.svg';
import clock from '../Images/clock.svg';
import thumb_up from '../Images/thumb_up.svg';
import people from '../Images/people.svg';
import message from '../Images/message.svg';
import { Col, Row } from 'react-bootstrap';

const Icons = () => {
    return (
        <>
            <Row className='icons-item'>
                    <Row className='icons'>
                        <Col xs={2}>
                            <div className="icon-item justify-content-center col-12">
                                <a href="#">
                                    <img
                                        className="setting-icon"
                                        src={bulb}
                                        alt="bulb"
                                    />
                                </a>
                                <h5 className='names'>Innovation</h5>
                            </div>
                        </Col>

                        <Col xs={2} >
                            <div className="icon-item">
                                <a href="#">
                                    <img className='setting-icon' src={thumb_up} alt="bell-icon" /></a>
                                    <h5 className='names'>Quality</h5>
                            </div>
                        </Col>

                        <Col xs={2} >
                            <div className="icon-item">
                                <a href="#"><img className='setting-icon' src={clock} alt="mail-icon" /></a>
                                <h5 className='names'>Experience</h5>
                            </div>
                          
                        </Col>
                        <Col xs={2}>
                            <div className="icon-item">
                                <a href="#">
                                    <img className="setting-icon" src={people} alt="people-icon" />
                                </a>
                                <h5 className='names'>Happy Clients</h5>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className="icon-item">
                                <a href="#">
                                    <img className="setting-icon" src={message} alt="message-icon" />
                                </a>
                                <h5 className='names'>Support</h5>
                            </div>
                        </Col>
                    </Row>

                </Row >
        </>
    )
}

export default Icons