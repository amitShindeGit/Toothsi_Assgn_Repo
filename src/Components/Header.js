import React, { useRef } from "react";
import FilterDropdown from "./UIElements/FilterDropdown";
import classes from "../Styles/Header.module.css";
import ReplayIcon from "@mui/icons-material/Replay";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../state-management/action/action";
import { Link } from "react-router-dom";

const types = [
  {
    val: 10,
    name: "All",
  },
  {
    val: 20,
    name: "Tshirts",
  },
  {
    val: 30,
    name: "Hoodies",
  },
  {
    val: 40,
    name: "Coats",
  },
];

const sizes = [
  {
    val: 10,
    name: "All",
  },
  {
    val: 20,
    name: "S",
  },
  {
    val: 30,
    name: "M",
  },
  {
    val: 40,
    name: "L",
  },
  {
    val: 50,
    name: "XL",
  },
];

const Header = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const searchBarHandler = (event) => {
    dispatch({ type: "SEARCH_PRODUCT", payload: event.target.value });
  };

  return (
    <div className={classes.header}>
      <div className={classes.leftSide}>
        <FilterDropdown data={types} type="Types" />
        <FilterDropdown data={sizes} type="Sizes" />
        <div className={classes.resetDiv}>
          <ReplayIcon
            fontSize="small"
            onClick={() => {dispatch(fetchAllProducts())}}
            style={{
              cursor: "pointer",
              color: "#00A0C6",
              alignItems: "center",
            }}
          />{" "}
          <button onClick={() => {dispatch(fetchAllProducts())}} className={classes.headerResetBtn}>Reset</button>
        </div>
      </div>

      <div className={classes.rightSide}>
        <div className={classes.searchDiv}>
          <p>Search:</p>
          <input
            ref={inputRef}
            onBlur={() => {
              inputRef.current.value = "";
            }}
            onChange={searchBarHandler}
            className={classes.searchInput}
          ></input>
        </div>
        <Link to="/cart"><button  className={classes.cartBtn}>Add To Cart</button></Link>
      </div>
    </div>
  );
};

export default Header;
