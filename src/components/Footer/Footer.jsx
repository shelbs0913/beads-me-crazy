import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Footer() {
  return <>
      <Form>
      <h3>Enter your Customization Ideas here!!!</h3>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
          <Col>
            <Form.Control placeholder="Email" />
          </Col>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter Feedback here"
          />
        </Row>
      </Form>
    </>
}
