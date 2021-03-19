import React from 'react'
import "./welcome.css"
import Button from "react-bootstrap/Button"
import Layout from "./components/Layout"
import Row from "react-bootstrap/Row"
import Image from 'react-bootstrap/Image'
import image from "../src/assets/hi.svg"

function Welcome (){
    return(
        <div className="Welcome-body">
            <Layout>
                <Row className="justify-content-md-center align-items-center">
                    <Image src={image} alt="hi"  className="Welcome-logo"/>
                </Row>  
                <Row className="justify-content-md-center align-items-center mt-5">
                    <Button className="btnWelcome w-75">Welcome</Button>
                </Row>  
            </Layout>
        </div>   
    )
}
export default Welcome
