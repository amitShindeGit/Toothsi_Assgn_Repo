import React from 'react'
import classes from '../Styles/SubHeader.module.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch } from 'react-redux';

const SubHeader = () => {
    const dispatch = useDispatch();
    const clickHandler = () => {
        console.log("first")
    }

    
  return (
    <div className={classes.subHeader}>

    <div className={classes.leftSideDiv}>
        <p className={classes.imageText}>Image</p>
        <p>Name</p>
    </div>

    <div className={classes.midSideDiv}>
        <div className={classes.arrowDiv}>
            <ArrowDropUpIcon  onClick={() => {dispatch({type: "SORT_UP_BY_COLOR"})}} fontSize='medium' style={{ color:"#A9A9A9", cursor: "pointer" }} />
            <ArrowDropDownIcon onClick={() => {dispatch({type: "SORT_DOWN_BY_COLOR"})}}  fontSize='medium' style={{ color:"#A9A9A9", cursor: "pointer" }} />
        </div>
        <p>Color</p>

        <div className={classes.arrowDiv}>
            <ArrowDropUpIcon onClick={() => {dispatch({type: "SORT_UP_BY_STOCK"})}} fontSize='medium' style={{ color:"#A9A9A9", cursor: "pointer" }}  />
            <ArrowDropDownIcon onClick={() => {dispatch({type: "SORT_DOWN_BY_STOCK"})}} fontSize='medium' style={{ color:"#A9A9A9", cursor: "pointer" }} />
        </div>
        <p>Stock</p>

        <div className={classes.arrowDiv}>
            <ArrowDropUpIcon onClick={() => {dispatch({type: "SORT_UP_BY_PRICE"})}} fontSize='medium' style={{ color:"#A9A9A9", cursor: "pointer" }}  />
            <ArrowDropDownIcon onClick={() => {dispatch({type: "SORT_DOWN_BY_PRICE"})}} fontSize='medium' style={{ color:"#A9A9A9", cursor: "pointer" }} />
        </div>
        <p>Price</p>
    </div>

    <div className={classes.rightSideDiv}>
        <p>Buy</p>
    </div>

    </div>
  )
}

export default SubHeader