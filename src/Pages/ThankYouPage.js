import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../Styles/ThankYou.module.css'

const ThankYouPage = () => {
  return (
    <div>
	<div className={classes.content}>
  <div className={classes.wrapper1}>
    <div className={classes.wrapper2}>
      <h1>Thank you !</h1>
      <p>Thanks you for shopping with us.  </p>
      
      <Link to="/"><button className={classes.gohome}>
       Home
      </button></Link>
      <Link to="/cart"><button className={classes.gohome}>
       Cart
      </button></Link>
    </div>
</div>
</div>
    </div>
  )
}

export default ThankYouPage