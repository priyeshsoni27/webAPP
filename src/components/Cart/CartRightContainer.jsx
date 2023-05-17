import { Box, Typography } from '@material-ui/core'
// import { Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import React from 'react'

const CartRightContainer = () => {


  const {cardDetails}=useSelector((state)=>{
    return {
      cardDetails:state?.AddtoCartReducer?.addedTOCart
    }
  })




  const initialValue = 0;
  const sumWithInitial = cardDetails.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price , 
  initialValue)
  console.log("totalSunm",sumWithInitial)



  return (
    // <Box>
     <div>
             <h1> Total Bill </h1>
            <Typography>
                Convenience Fee:- 50$
            </Typography>
            <hr></hr>
            <h4>Total Amount:- {sumWithInitial + 50} </h4>
 </div>
    // </Box>
  )
}

export default CartRightContainer