import React, { useEffect, useState } from "react";
import classes from "../Styles/Product.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Checkbox } from "@mui/material";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import ProductModal from "./ProductModal";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ id, img, name, color, inStock, price, size, allColors, totalQuantity }) => {
  const [modalIsOn, setModalIsOn] = useState(false);
  const [cartVal, setCartVal] = useState();
  const [check, setCheck] = useState(false);
  const cart = useSelector((state) => (state.productReducer.cart));
  const dispatch = useDispatch();
  const modalIsOff = () => {
    setModalIsOn(false);
  };

  const productCardHandler = () => {
    setModalIsOn(true);
  };

  const onCartInputChangeHandler = (e) => {
    setCartVal(Number(e.target.value));
  }

  const cartCheckboxHandler = (event ) => {
    // const isChecked = event.target.checked;
    if(!cartVal){
      alert("Please add some quantity before adding a product to cart.")
      setCheck(false);
    }

    if(cartVal && (cartVal > totalQuantity)){
      alert("You have exceeded the amount of available quantity or the product is out of stock!!");
      setCheck(false);
    }

    if(!check && cartVal && cartVal <= totalQuantity){
      dispatch({type: "ADD_PRODUCT_TO_CART", payload: { cartVal, id ,img,name,price,totalQuantity}});
      setCheck(true);
    }

    if(check ){
      dispatch({type: "REMOVE_PRODUCT_FROM_CART", payload: { cartVal, id ,price,totalQuantity}})
      setCheck(false);
    }
    // console.log(cart,"CART") //check false up
  }

  return modalIsOn ? (
    <>
    <ProductModal key={price} modalIsOn={modalIsOn} modalIsOff={modalIsOff}  img={img} name={name} color={color} inStock={inStock} price={price} size={size} allColors={allColors} totalQuantity={totalQuantity}  />
    <div className={classes.subHeader}>
      <div className={classes.leftSideDiv}>
        <img className={classes.imageText} src={img}></img>
        <p className={classes.nameText} onClick={productCardHandler}>
          {name}
        </p>
      </div>

      <div className={classes.midSideDiv}>
        <div className={classes.colorDiv}>
          <p style={{ color: "#19ABCF", textDecoration: "underline" }}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </p>
        </div>

        <div className={classes.stockDiv}>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              color: `${inStock ? "darkgreen" : "red"}`,
            }}
          >
            {inStock ? (
              <SentimentSatisfiedIcon
                fontSize="small"
                style={{
                  display: "inline-block",
                  alignItems: "center",
                  marginRight: ".5rem",
                  color: "darkgreen",
                }}
              />
            ) : (
              <SentimentVeryDissatisfiedIcon
                fontSize="small"
                style={{
                  display: "inline-block",
                  alignItems: "center",
                  marginRight: ".5rem",
                  color: "red",
                }}
              />
            )}
            {inStock ? "In Stock" : "Out of Stock"}
          </p>
        </div>

        <div className={classes.priceDiv}>
          <p>${price}</p>
        </div>
      </div>

      <div className={classes.rightSideDiv}>
        <input className={classes.cartInput}    onChange={(e) => onCartInputChangeHandler(e)} type="number" />
        <button className={classes.cartIcon} disabled>
          <ShoppingCartIcon fontSize="small" />
        </button>
        <Checkbox size="small" checked={check} onChange={cartCheckboxHandler} />
      </div>
    </div>
    </>
  ) : (
    <div className={classes.subHeader}>
      <div className={classes.leftSideDiv}>
        <img className={classes.imageText} src={img}></img>
        <p className={classes.nameText} onClick={productCardHandler}>
          {name}
        </p>
      </div>

      <div className={classes.midSideDiv}>
        <div className={classes.colorDiv}>
          <p style={{ color: "#19ABCF", textDecoration: "underline" }}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </p>
        </div>

        <div className={classes.stockDiv}>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              color: `${inStock ? "darkgreen" : "red"}`,
            }}
          >
            {inStock ? (
              <SentimentSatisfiedIcon
                fontSize="small"
                style={{
                  display: "inline-block",
                  alignItems: "center",
                  marginRight: ".5rem",
                  color: "darkgreen",
                }}
              />
            ) : (
              <SentimentVeryDissatisfiedIcon
                fontSize="small"
                style={{
                  display: "inline-block",
                  alignItems: "center",
                  marginRight: ".5rem",
                  color: "red",
                }}
              />
            )}
            {inStock ? "In Stock" : "Out of Stock"}
          </p>
        </div>

        <div className={classes.priceDiv}>
          <p>${price}</p>
        </div>
      </div>

      <div className={classes.rightSideDiv}>
        <input className={classes.cartInput}  onChange={(e) => onCartInputChangeHandler(e)}></input>
        <button className={classes.cartIcon} disabled>
          <ShoppingCartIcon fontSize="small" />
        </button>
        <Checkbox size="small" checked={check} onChange={cartCheckboxHandler}/>
      </div>
    </div>
  );
};

export default Product;
