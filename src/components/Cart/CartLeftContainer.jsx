import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {
  CardActions,
  CardContent,
  Typography,
  Card,
  Grid,
  Box,
  Button
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const CartLeftContainer = () => {

    // const navigate=useNavigate()

  const {productList,cardDetails}=useSelector((state)=>{
    return {
      productList:state?.cartReducers?.products,
      cardDetails:state?.AddtoCartReducer?.addedTOCart
    }
  })






  return (
    <div><Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} columns={{ xs: 3, sm: 8, md: 12 }}>
      {cardDetails?.map((cardItems) => {
        return (
          <Grid item xs={2} md={2} sm={4} key={cardItems?.id}>
            <Card sx={{ maxWidth: 100 ,height:40}}>
              <Box sx={{ height: "100", width: "50" }}>
                 <img
                  src={cardItems?.image}
                  alt="Photos"
                  height="80"
                  title=""
                />
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  sx={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  {cardItems.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ textOverflow: "ellipsis", wordWrap: "break-word" }}
                >
                  ${cardItems.price}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ textOverflow: "ellipsis", wordWrap: "break-word" }}
                >
                  {cardItems.category}
                </Typography>
              </CardContent>
              <CardActions>
                
                <AddIcon/>
                <RemoveIcon/>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  </Box></div>
  )
}

export default CartLeftContainer