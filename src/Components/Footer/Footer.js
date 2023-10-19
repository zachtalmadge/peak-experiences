import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return (
        <div className="container-fluid bg-dark py-4">
            <Container>
                <Row className="text-center text-light">
                    <Col className="text-left">
                        <p>Contributing Developers</p>
                        <p>⭐️ Alberto Sierra ⭐️</p>
                        <p>⭐️ Landon Cramer ⭐️</p>
                        <p>⭐️ Zachary Talmadge ⭐️</p>
                    </Col>
                    <Col> 
                        <p>Brought to you by</p>
                        <img className="img-fluid rounded" src="./assets/fis_logo.png" alt="Flatiron school logo"/>
                        <p className="mt-3">Flatiron School</p>
                    </Col>
                    <Col>
                        <p>Social Media</p>
                        <i className="fab mx-3 fa-facebook" style={{fontSize: "50px"}}></i>
                        <i className="fab mx-3 fa-instagram" style={{fontSize: "50px"}}></i>
                        <i className="fab mx-3 fa-linkedin" style={{fontSize: "50px"}}></i>
                        <i className="fab mx-3 fa-github" style={{fontSize: "50px"}}></i>
                        <i className="fab mx-3 fa-discord" style={{fontSize: "50px"}}></i>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer