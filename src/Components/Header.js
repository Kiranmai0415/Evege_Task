import React from "react";
import { Col, Row } from "react-bootstrap";
import Agency from '../Images/Agency.jpeg';
import './styles.css'


const Header = () => {
    return (
        <>
            <Row>
                <Col xs={2} >
                    <div className="flx ">
                        <img
                            src={Agency}
                            alt="Logo"
                            className="logo"
                        />

                    </div>
                </Col>

                <div className='posRel borderwhite ml4'>
                    <ul className="nav justify-content-center  col-12 ">
                        <li >

                        </li>
                        <li className="navbar ">
                            <a className="nav-link" href="#">WHY US</a>
                        </li>
                        <li className="navbar ">
                            <a className="nav-link" href="#">ABOUT</a>
                        </li>
                        <li className="navbar ">
                            <a className="nav-link" href="#">SERVICES</a>
                        </li>
                        <li className="navbar ">
                            <a className="nav-link" href="#">PORTFOLIO</a>
                        </li>
                        <li className="navbar ">
                            <a className="nav-link" href="#">REVIEWS</a>
                        </li>
                        <li className="navbar ">
                            <a className="nav-link" href="#">OUR SKILLS</a>
                        </li>
                        <li className="navbar ">
                            <a className="nav-link" href="#">CONTACT US</a>
                        </li>
                    </ul>
                </div>

            </Row>



           
        </>
    );
}

export default Header;
