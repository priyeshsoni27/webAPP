import React, { useEffect, useState } from "react";
import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Card,
  Grid,
  Box,
  Button,
} from "@material-ui/core";

import CustomCard from "./Common/Card";

import { useDispatch, useSelector } from "react-redux";
import { cartActions, cartDetails } from "../Redux/Action/cartActions";
import Header from "./Header";

const Home = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  const { productList, cardDetails } = useSelector((state) => {
    return {
      productList: state?.cartReducers?.products,
      cardDetails: state?.AddtoCartReducer?.addedTOCart,
    };
  });

  console.log(cardDetails, "list");

  // let finalData=[]
  const getProductDetails = (productDetails) => {
    const body = {
      id: productDetails?.id,
      category: productDetails?.category,
      image: productDetails?.image,
      price:productDetails?.price,
      description: productDetails?.description,
    };
    // finalData.push(body)
    dispatch(cartDetails(body));
  };

  console.log("prductttt", productList);

  useEffect(() => {
    dispatch(cartActions());
  }, []);

  console.log(data);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Grid container spacing={2} columns={{ xs: 3, sm: 8, md: 12 }}>
        {productList?.map((cardItems) => {
          return (
            <Grid item xs={2} md={3} sm={4} key={cardItems?.id} rowSpacing="4">
              {/* <CustomCard  Title={cardItems?.title} Price={cardItems.price} 
              Category={cardItems.category} ProductImg={cardItems.image}
              /> */}
              <Card sx={{ maxWidth: 100, height: 40 }}>
                <CardContent>
                    <img
                    src={cardItems?.image}
                    alt="Photos"
                    height="80"
                    title=""
                  />
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
                  <Button
                    text="Add to Cart"
                    variant="contained"
                    onClick={() => getProductDetails(cardItems)}
                  >
                    Add to Cart 
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Home;
