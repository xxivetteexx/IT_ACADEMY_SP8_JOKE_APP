import React,{useState, useEffect} from "react"
import "./App.css"
import JokeList from "./components/API/JokeList"
import WeatherList from "./components/API/WeatherList"
import Header from "./components/Header"
import MainImage from "./components/MainImage"
import {Container, Row, Col} from "react-bootstrap"
import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
import Welcome from "./Welcome"


function App()  {
   const [welcomePage,setWelcomePage]= useState(false)


    return (
        <Router>
            <div className="App-body">
                {/* <Welcome/> */}
                    {/* HEADER */}
                    <Header />
                    <Container fluid>
                        {/* BODY */}
                        <Row className= "align-items-center">
                            <Col md={7}>
                                <Row className="justify-content-md-center">
                                    {/* WEATHER APP */}
                                    <Col md={10}>
                                        <WeatherList />
                                        {/* JOKE APP */}
                                        <JokeList />
                                    </Col> 
                                </Row>
                            </Col>   
                            <Col md={5}>
                                <Row className="justify-content-md-end">
                                    <MainImage/>
                                </Row>
                            </Col> 
                        </Row>
                    </Container> 
            </div>
        </Router>
    )
}

export default App

