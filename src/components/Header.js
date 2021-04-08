import React from 'react'
import {Nav, Container} from 'react-bootstrap'
import '../components/header.css';

const Header = () => {
    return(
        <Container fluid className="jusitify-content-center p-0">
            <Nav expand="lg"className="App-navbar justify-content-between p-2">
                <Nav.Item > Weather&Jokes / </Nav.Item>
            </Nav>
        </Container>
    )
}

export default Header