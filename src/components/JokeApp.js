import React from "react"
import JokeList from "../components/API/JokeList"
import WeatherList from "../components/API//WeatherList"
import Header from "./Header"
import MainImage from "./MainImage"
import {Container, Row, Col} from "react-bootstrap"


function JokeApp(){
    return(                   
        <Container fluid className="app-body justify-content-center align-items-center p-0">
            {/* HEADER */}
            <Header />
            {/* BODY */}
            <Row className= "justify-content-center align-items-center">
                <Col md={7} className="justify-content-center" >
                    <Row className="justify-content-center">
                        <Col xs={12} md lg={9}>
                        <WeatherList/>
                        {/* JOKE APP */}    
                        <JokeList />
                        </Col>
                    </Row>
                    
                </Col> 
                <Col md={5} className="align-items-center" >                        
                    <MainImage/>                 
                </Col> 
            </Row>
        </Container> 
    )
}

export default JokeApp