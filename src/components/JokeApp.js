import React from "react"
import JokeList from "../components/API/JokeList"
import WeatherList from "../components/API//WeatherList"
import Header from "./Header"
import MainImage from "./MainImage"
import {Container, Row, Col} from "react-bootstrap"

function JokeApp(){
    return(                   
        <Container fluid className="justify-content-center align-items-center p-0">
            {/* HEADER */}
            <Header />

            {/* BODY */}
            <Row className= "app-body justify-content-center align-items-center">
                <Col md={7} className="">
                    <Row className="justify-content-center">
                        {/* WEATHER APP */}
                        <Col md={10} >
                            <WeatherList/>
                            {/* JOKE APP */}    
                            <JokeList />
                        </Col> 
                    </Row>
                </Col> 

                <Col md={5} className=" d-flex justify-content-center">                        
                    <MainImage/>                 
                </Col> 
            </Row>
        </Container> 
    )
}

export default JokeApp