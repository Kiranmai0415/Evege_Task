import React from 'react'
import Header from './Header';
import './styles.css'
import { Button, Col, Row } from 'react-bootstrap';
import Icons from './Icons';
import Service from './Service';
import { useNavigate } from 'react-router-dom';

const Main = () => {

    const navigate = useNavigate();

    const handleSave = () => {
        navigate('/table');
    }
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <Row className='p-tag' >
                    <h2 className='heading' height='30px'> WE ARE EXPERTS </h2>
                    <h5 className='lorem'>Lorem ipsum is placeholder text commonly used in the graphic,<br />
                        print, and publishing industries for previewing layouts and visual mockups.</h5>

                    <div>
                        <Button variant='warning' className='read-btn' >Read More</Button>
                    </div>
                </Row>
            </div>
            <div>
                <Icons />
            </div>
            <div>
                <Row className='p-tag' >
                    <h2 className='heading' height='30px'>START  YOUR NEW PROJECT</h2>
                    <div className='inputs'>
                        <input placeholder='YOUR NAME' className='input' />
                        <input placeholder='YOUR EMAIL' className='input1' />
                        <input placeholder='YOUR PHONE' className='input1' />
                        <Button className='input1' variant='warning' onClick={handleSave}>SEND REQUEST</Button>
                    </div>
                    <div><h5 className='lorem'>Lorem ipsum is placeholder text commonly used in the graphic,<br />
                        print, and publishing industries for previewing layouts and visual mockups.</h5>
                    </div>
                </Row>
            </div>
            <div>
                <Service />
            </div>
            <div>
               


            </div>

        </>
    );
}

export default Main