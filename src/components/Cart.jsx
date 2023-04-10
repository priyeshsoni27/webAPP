import React from 'react'
import { Button, Grid } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

import CartRightContainer from './Cart/CartRightContainer';
import CartLeftContainer from './Cart/CartLeftContainer';
const Cart = () => {
  const navigate=useNavigate()


 return (
    <div >
    <Button variant="text" text="heloo" onClick={()=>navigate('/')}>{`Back-->`}</Button>
    <Grid >

    <CartLeftContainer/>
    <CartRightContainer/>

    </Grid>
    
    </div>
  )
}

export default Cart