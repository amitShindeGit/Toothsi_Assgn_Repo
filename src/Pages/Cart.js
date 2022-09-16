import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartProduct from '../Components/CartProduct'
import classes from '../Styles/Cart.module.css'

const Cart = () => {
   let cart = useSelector((state) => (state.productReducer.cart));
   let totalValue = cart.reduce(function (accumulator, object) {
    return (Number(accumulator)+(   Number(object.cartVal) * Number(object.price)))
   }, 0)


  return (
    <div>
    <div className={classes.mainCartDiv}>
        <div className={classes.leftSideDiv}>
            
            <ul className={classes.cartHeaderDiv}>
                <Link to="/" style={{textDecoration:"none", color:"black"}}><li>Home</li></Link>
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
            </ul>
        </div>

        <div className={classes.rightSideDiv}>
        <div className={classes.cartBox}>
            <h2>Cart Totals</h2>
            <div className={classes.subTotalDiv}>
                <h6>Subtotal:</h6>
                <h6>${totalValue}</h6>
            </div>
            <div  className={classes.totalDiv}>
                <p>Total:</p>
                <p>${totalValue}</p>
            </div>
            <Link to="/thankYou"><button disabled={totalValue<=0 ? true : false} style={{ backgroundColor:`${totalValue<=0 ? "grey" : "#1246AF"}`, cursor: `${totalValue<=0 ? "not-allowed" : "pointer"}` }} className={classes.checkoutBtn}>Proceed to cart</button></Link>
        </div>
        
        </div>        
    </div>

    { cart.map((item) => {
        return <CartProduct key={item.id} id={item.id} img={item.img} name={item.name} price={item.price} cartVal={item.cartVal} totalQuantity={item.totalQuantity} />
    })}
    
    </div>
  )
}

export default Cart