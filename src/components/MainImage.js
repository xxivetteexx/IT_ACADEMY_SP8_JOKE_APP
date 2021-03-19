import React from "react"
import Image from 'react-bootstrap/Image'
import image from "../assets/smile.png"

const MainImage = () => {
    return(
        <Image className="mainImage" 
        src={image}  alt="Smile" fluid
        style={{border:'10px solid black'
        }}/> 
    )
}
export default MainImage


 