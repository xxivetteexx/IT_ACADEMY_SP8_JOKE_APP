import React, { useState } from "react"
import "./App.css"
import JokeList from "./components/API/JokeList"
import Layout from "./components/Layout"
import WeatherList from "./components/API/WeatherList"
import Header from "./components/Header"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import MainImage from "./components/MainImage"

function App()  {
   

    return (
        <div className="App-body">
        {/* HEADER */}
        <Header />
            <Layout>
                 {/* BODY */}
                <Row>
                    <Col md={7}>
                        <Row className="justify-content-md-center align-items-center mt-5">
                            {/* WEATHER APP */}
                            <Col md={9}>
                                <WeatherList />
                                {/* JOKE APP */}
                                <JokeList />
                            </Col> 
                        </Row>
                    </Col>   
                    <Col md={5}>
                        <Row className="justify-content-md-center">
                            <MainImage/>
                        </Row>
                    </Col> 
                </Row>
            </Layout> 
        </div>

    )
}

export default App

