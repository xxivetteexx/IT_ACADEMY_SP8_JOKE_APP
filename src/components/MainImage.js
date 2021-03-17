import React from "react"
import Image from 'react-bootstrap/Image'
import image from "../assets/smile.png"

const MainImage = () => {
    return(
        <Image className="mainImage" src={image}  alt="Smile" fluid/> 
    )
}
export default MainImage


 