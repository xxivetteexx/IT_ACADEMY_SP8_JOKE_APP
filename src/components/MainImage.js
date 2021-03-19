import React from "react"
import {Image, Container} from "react-bootstrap"
import image from "../assets/smile.png"

const MainImage = () => {
    return(
        <Container fluid className="App-image align-items-md-center p-4" style={{backgroundColor:'black'}}>
            <Image fluid className="mainImage" src={image}  alt="Smile"  /> 
        </Container>
    )
}
export default MainImage


 