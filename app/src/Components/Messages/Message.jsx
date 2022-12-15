import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MessageFooter from './MessageFooter'
import MessageMain from './MessageMain'
import MessageMiddle from './MessageMiddle'


const Message = () => {
  return (
    <Container>
        <Row>

        <Col xs={"4"} className="mt-2  forBoder">
                <MessageMain/>
          
          </Col>
          <Col xs={"4"} className="mt-4 forBorder">
                <MessageMiddle/>
          </Col>

          <Col xs={"3"} className="mt-4 pt-1">
                <MessageFooter
                 
                />
          
          </Col>
         

        </Row>
    </Container>
    )
}

export default Message