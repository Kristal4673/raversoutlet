import React from "react";
import styles from "./GeneralForm.css";
import { Col, Form, Row } from "react-bootstrap";

const GeneralForm = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <p className="">contact information</p>
        <p className="">Don't have an account? sign up</p>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Control type="number" placeholder="Phone no" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Email">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Text>Address</Form.Text>

        <Form.Group className="mt-2" controlId="streetAddress">
          <Form.Control required type="text" placeholder="street address" />
        </Form.Group>
        <Form.Text>street address, housing number</Form.Text>

        <Form.Group className="mt-3" controlId="apartment">
          <Form.Control
            required
            type="text"
            placeholder="Apt #, Floor, etc (optional)"
          />
        </Form.Group>

        <Form.Text>Apartment number, unit, floor, etc.</Form.Text>

        <>
          <Row className="mt-3">
            <Col x-sm={12} sm={4} lg={4} md={4}>
              <Form.Group className="mb-1 me-1 ms-1" controlId="city">
                <Form.Control required type="text" placeholder="City" />
              </Form.Group>
            </Col>
            <Col x-sm={12} sm={4} lg={4} md={4}>
              <Form.Group className="mb-1 me-1 ms-1" controlId="state">
                <Form.Control required type="text" placeholder="State" />
              </Form.Group>
            </Col>
            <Col x-sm={12} sm={4} lg={4} md={4}>
              <Form.Group className="mb-1 me-1 ms-1" controlId="zip">
                <Form.Control required type="text" placeholder="Zip Code" />
              </Form.Group>
            </Col>
          </Row>
        </>

        <div className="d-flex">
          <Form.Check
            type="checkbox"
            id={Math.random()}
            // checked={mainBox}
            // onClick={mainBoxHandler}
          />
          <p className="ms-2">
            Keep me up to date on news and exclusive offers
          </p>
        </div>
      </Form>
    </div>
  );
};

export default GeneralForm;
