import React from "react"
import {Image, Container} from "react-bootstrap"
import image from "../assets/smile.png"

const MainImage = () => {
    return(
        
            <Image fluid className="mainImage" src={image}  alt="Smile"  /> 
      
    )
}
export default MainImage


 