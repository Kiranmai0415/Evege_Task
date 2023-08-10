import React from 'react'
import star from '../Images/star.svg'
import { Col, Row } from 'react-bootstrap';

const Service = () => {
    return (
        <>
            <Row className='icons-item'>
                <Row className='icons'>
                    <Col xs={2}>
                        <div className="icon-item justify-content-center col-22">
                            <a href="#">
                                <img
                                    className="service-icon"
                                    src={star}
                                    alt="bulb"
                                />
                            </a>
                                <h5 className='services'>WEB DESIGN</h5>
                                
                                
                        </div>
                    </Col>

                    <Col xs={2} >
                        <div className="icon-item">
                            <a href="#">
                                <img className='service-icon' src={star} alt="bell-icon" /></a>
                                <h5 className='services'>GRAPHIC DESIGN</h5>
                                
                        </div>

                    </Col>

                    <Col xs={2} >
                        <div className="icon-item">
                            <a href="#"><img className='service-icon' src={star} alt="mail-icon" /></a>
                                <h5 className='services'>BRANDING</h5>
                                
                        </div>

                    </Col>
                    <Col xs={2}>
                        <div className="icon-item">
                            <a href="#">
                                <img className="service-icon" src={star} alt="people-icon" />
                            </a>
                                <h5 className='services'>MARKETING</h5>
                                
                        </div>
                    </Col>
                </Row>
            </Row>


        </>
    );
}

export default Service