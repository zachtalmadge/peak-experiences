import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return (
        <div className="container-fluid bg-dark py-4">
            <Container>
                <Row className="text-center text-light">
                    <Col>
                        <p>Contributing Developers</p>
                        <p>Alberto Sierra</p>
                        <p>Landon Cramer</p>
                        <p>Zachary Talmadge</p>
                    </Col>
                    <Col> 
                        Brought to you by
                    </Col>
                    <Col>
                        Social Media
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer