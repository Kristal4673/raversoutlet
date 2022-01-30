import * as React from "react";
import styles from "./SingleItem.module.css";
import StockController from "../Helpers/StockController";

const SingleItem = (props) => {
  const [heart, setHeart] = React.useState(0);
  //limiting name length to keep designing intact
  const cartName = props.Name.slice(0, 45);
  const cartPlusCountHandler = () => {
    //when plus button is clicked to increase quantity
  };

  const cartMinusCountHandler = () => {
    //minus is clicked
  };
  const itemDelete = () => {
    //delete on single item is clicked
  };
  const fvrtHandler = () => {
    heart === 0 ? setHeart(1) : setHeart(0);
  };
  return (
    <>
      <div className={styles.productWrapper}>
        <div className={styles.mainDetailDiv}>
          <div className={styles.imgContainer}>
            <img className={styles.imgSize} src={props.bookimg} alt="" />
          </div>
          <div className={styles.nameAuthorDiv}>
            <p className={styles.bookName}>{cartName}</p>

            <p className={styles.bookAuthor}>{props.Author}</p>
            <p className={styles.priceSM}>Rs.{props.OurPrice}</p>
          </div>
        </div>

        <div className={styles.priceDiv}>
          <p className={styles.ourPrice}>Rs.{props.OurPrice}</p>
          <p className={styles.marketPrice}>Rs.{props.MarketPrice}</p>
          <p className={styles.sale}>- {20}%</p>
          <p className={styles.iconPara}>
            <i
              className={`fa fa-heart ${
                heart === 0 ? styles.icons : styles.displayNone
              }`}
              aria-hidden="true"
            ></i>
            <i
              className={`fa fa-trash ${styles.iconsD}`}
              onClick={itemDelete}
              aria-hidden="true"
            ></i>
          </p>
        </div>
        <div className={styles.controllerDiv}>
          <StockController
            pstock={12}
            pcount={2}
            // pstock={itemsLeft}
            // pcount={itemQuantity}
            funcPlus={cartPlusCountHandler}
            funcMinus={cartMinusCountHandler}
            className={""}
          />
        </div>
      </div>
    </>
  );
};

export default SingleItem;
