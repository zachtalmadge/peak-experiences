import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    return (
        <>
            <Container>
                <Row className="text-center">
                    <Col>
                        Contributing Developers
                    </Col>
                    <Col> 
                        Brought to you by
                    </Col>
                    <Col>
                        Social Media
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer