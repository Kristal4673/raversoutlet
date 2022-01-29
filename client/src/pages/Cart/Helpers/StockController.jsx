import styles from "./StockController.css";
// import { AiFillCheckCircle } from "react-icons/ai";
// import { FaArrowCircleDown } from "react-icons/fa";
// import { MdCancel } from "react-icons/md";

const StockController = (props) => {
  return (
    <div className={styles.stockAndButton}>
      <p
        className={`${props.className} ${
          props.pstock > 10 ? styles.stock : styles.displayNone
        }`}
      >
        {/* <AiFillCheckCircle className={styles.checkIcon} />*/}
        Available
      </p>
      {/* <p
        className={`${props.className} ${
          props.pstock <= 10 && props.pstock !== 0
            ? styles.stockLow
            : styles.displayNone
        }`}
      >
        <FaArrowCircleDown className={styles.arrowDownIcon} /> Low in Stock, Buy
        Now
      </p>
      <p
        className={`${props.className} ${
          props.pstock === 0 ? styles.stockFinish : styles.displayNone
        }`}
      >
        <MdCancel className={styles.cancelIcon} /> out of stock
      </p> */}
      <div className={styles.buttonGroupPosition}>
        <div
          className={
            props.pcount === 0 ? styles.displayNone : styles.buttonGroup
          }
        >
          <div className={styles.minusButton} onClick={props.funcMinus}>
            <p>-</p>
          </div>
          <div className={styles.Display}>
            <h6> {props.pcount}</h6>
          </div>
          <div className={styles.plusButton} onClick={props.funcPlus}>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockController;
