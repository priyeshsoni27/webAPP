import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Header = () => {

  const navigate=useNavigate()


  
    const {productList,cardDetails}=useSelector((state)=>{
        return {
          productList:state?.cartReducers?.products,
          cardDetails:state?.AddtoCartReducer?.addedTOCart
        }
      })
  return (
    <div style={{backgroundColor:"lightcoral"}}>
      Myntra
     <div style={{display:'flex',flexDirection:"row",justifyContent:"end"}}>
      <div>

         <ShoppingCartIcon fontSize='large' onClick={()=>navigate('/cart')}/>
      </div>
    <p style={{backgroundColor:"lightgray",size:"30px",
    borderRadius:"40px",position:"relative",bottom:"22px",
    right:"8px",size:"40px",paddingInline:"7px"}}>{cardDetails?.length}</p>
    </div>
    
    </div>
  )
}

export default Header