import React from "react";
import styles from "./Checkout.module.css";
import GeneralForm from "../../Components/Forms/Helpers/GeneralForm";
import { Button, Card, Col, Row } from "react-bootstrap";
import SingleItem from "../Cart/Helpers/SingleItem";

const Checkout = () => {
  const [itemToAdd, setItemToAdd] = React.useState([
    {
      key: Math.random(),
      Img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80",
      id: Math.random(),
      stock: 22,
      Name: "item Name",
      Author: "company name",
      OurPrice: 200,
      MarketPrice: 500,
    },
    {
      key: Math.random(),
      Img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80",
      id: Math.random(),
      stock: 22,
      Name: "item Name",
      Author: "company name",
      OurPrice: 200,
      MarketPrice: 500,
    },
  ]);
  return (
    <Card
      className={`ps-2 pe-2  mt-3 pb-3 m-auto overflow-hidden ${styles.wrapper}`}
    >
      <h1 className="ps-3">checkout</h1>
      <Row className="d-flex justify-content-between">
        <Col className="ps-4 pt-2" sm={12} md={5} lg={4}>
          <GeneralForm />
        </Col>
        <Col sm={12} md={7} lg={7} className={` ${styles.itemList}`}>
          {itemToAdd.map((item) => (
            <>
              {/* <hr className="m-0" /> */}
              <Card>
                <SingleItem
                  key={item.id}
                  bookimg={item.Img}
                  id={item.id}
                  stock={item.Stock}
                  Name={item.Name}
                  Author={item.Author}
                  OurPrice={item.OurPrice}
                  MarketPrice={item.MarketPrice}
                />
              </Card>
            </>
          ))}
          {/* <hr className="m-0" /> */}
        </Col>
      </Row>

      <Col sm={12} md={5} lg={4} className="">
        <Card className="ps-2 pe-2">
          <div className={styles.inputButton}>
            <input
              className={styles.summaryInput}
              type="text"
              placeholder="Coupon"
            />
            <button className={styles.summaryButton}>
              <p> Apply</p>
            </button>
          </div>
        </Card>
      </Col>
      <Col sm={12} md={5} lg={4} className="">
        <Card className="ps-2 pe-2">
          <div className={styles.inputButton}>
            <h6 className="m-0">subtotal</h6>
            <p className="m-0 font-weight-bold">$ 400</p>
          </div>
        </Card>
      </Col>
      <Col sm={12} md={5} lg={4} className="">
        <Card className="ps-2 pe-2">
          <div className={styles.inputButton}>
            <h5 className="m-0">Total</h5>
            <p className="m-0">
              <strong>$ 400</strong>
            </p>
          </div>
        </Card>
      </Col>
      <Col sm={12} md={5} lg={4} className="pe-1 mt-3">
        <Button className={styles.orderButton}>Place Order</Button>
      </Col>
    </Card>
  );
};

export default Checkout;
