import React from "react";
import styles from "./Shipping.module.css";
const Shipping = () => {
  return (
    <div className={styles.freeShipping}>
      <hr className={styles.hr} />
      <p className={styles.paraShipping}>
        <span className={styles.shippingText}>
          <i
            className={`fa fa-truck ${styles.shippingIcon}`}
            aria-hidden="true"
          ></i>
          Free Shipping
        </span>
        over Rs.1000 shopping
      </p>
      <hr className={styles.hr} />
    </div>
  );
};

export default Shipping;
