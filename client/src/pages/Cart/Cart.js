import * as React from "react";
import styles from "./Cart.module.css";
import Shipping from "./Helpers/Shipping";
import { Form } from "react-bootstrap";
import SingleItem from "./Helpers/SingleItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const [mainBox, setMainBox] = React.useState(false);
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
  const mainBoxHandler = () => {
    setMainBox(!mainBox);
  };
  const deleteAllHandler = () => {
    if (mainBox === true) {
    }
  };

  //total checkout price
  const checkoutPrice = 200;
  const delivery = 100;
  //
  //

  const handleOrder = () => {
    //place order
  };

  const handleCancel = () => {};

  const submitHandler = (e) => {};

  return (
    <div className={styles.controller}>
      <Shipping />
      <div className={styles.pageWrapperWrap}>
        <h1 className={styles.carth1}>Shopping Cart</h1>

        <div className={styles.lrgWrapper}>
          <button
            onClick={handleOrder}
            type="submit"
            className={`${styles.checkoutLarge}
              ${itemToAdd.length === 0 ? styles.blur : ""}`}
          >
            Checkout (Total: Rs. {checkoutPrice + delivery})
          </button>
        </div>
        <div className={styles.pageWrapper}>
          <div className={styles.productsSection}>
            <div className={styles.productNav}>
              <p className={styles.checkPara}>
                <Form.Check
                  type="checkbox"
                  id={Math.random()}
                  checked={mainBox}
                  onClick={mainBoxHandler}
                />
                <span className={styles.navItemCount}>
                  {itemToAdd.length} item(s)
                </span>
              </p>
              <p className={styles.deletePara} onClick={deleteAllHandler}>
                <i className="fa fa-trash" aria-hidden="true"></i>
                <span className={styles.deleteText}>Delete</span>
              </p>
            </div>
            {/* ....upper part of menu end.... */}
            {itemToAdd.length === 0 && <h4>No item in cart</h4>}
            {itemToAdd.map((item) => (
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
            ))}
          </div>

          <div className={styles.summarySection}>
            <h6 className={styles.summaryHeading}>Order Summary</h6>
            <div className={styles.subShip}>
              <p className={styles.summaryPara}>Subtotal (4 items)</p>
              <p className={styles.stAmount}>Rs. {checkoutPrice}</p>
            </div>
            <div className={styles.subShip}>
              <p className={styles.summaryPara}>Shipping Fee</p>
              <p className={styles.sfAmount}>{delivery}</p>
            </div>
            {/* <div className={styles.inputButton}>
              <input
                className={styles.summaryInput}
                type="text"
                placeholder="Coupon"
              />
              <button className={styles.summaryButton}>
                <p> Apply</p>
              </button>
            </div> */}
            <div className={styles.subShip}>
              <p>Total</p>
              <p>{checkoutPrice + delivery}</p>
            </div>
            <div className={styles.checkoutButtonContainer}>
              <Link className="" to="/checkout">
                <button
                  onClick={handleOrder}
                  className={`${styles.checkoutButton}
              ${itemToAdd.length === 0 ? styles.blur : ""}`}
                >
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
