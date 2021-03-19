import React, {useState, useEffect} from 'react'
import "./welcome.css"
import image from "../src/assets/hi.svg"
import {Container, Row, Image, Button, Col} from "react-bootstrap"


function Welcome (){
    const[welcome, setWelcome]=useState(false)

    const handleClick= ()=>{
        setWelcome(!welcome);
    }

    return(
            <Container fluid className="Welcome-body ">
                <Row className="justify-content-center">
                    <Col>
                        <Image className="Welcome-logo" src={image} alt="hi" />
                    </Col>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Col >
                        <Button className="btnWelcome" onClick={handleClick}>Welcome</Button>
                    </Col>
                </Row>
            </Container>  
    )
}
export default Welcome
