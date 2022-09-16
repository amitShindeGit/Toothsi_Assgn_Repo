import React from 'react'
import classes from '../Styles/CartProduct.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';

const CartProduct = ({id, img, name, price, cartVal, totalQuantity}) => {
    const dispatch = useDispatch();
    const productAddHandler = () => {
        dispatch({type:"ADD_PRODUCT_TO_CART_BTN", payload:{id, totalQuantity, cartVal}})
    }

    const productMinusHandler = () => {
        dispatch({type:"MINUS_PRODUCT_TO_CART_BTN", payload:{id, totalQuantity, cartVal}})
    }

  return (
    <div className={classes.cartProductMainDiv}>
        <div>
            <img className={classes.cartProdImg} src={img}></img>
        </div>

        <div>
            {name}
        </div>

        <div>
            {price}
        </div>

        <div className={classes.carValDIv}>
            <AddIcon onClick={productAddHandler} style={{cursor:"pointer"}} />
            {cartVal}
            <RemoveIcon onClick={productMinusHandler} style={{cursor:"pointer"}}/>
        </div>

        <div>
            {cartVal*price}
        </div>
    </div>
  )
}

export default CartProduct