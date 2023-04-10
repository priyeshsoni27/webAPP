import React from "react";
import {
  CardActions,
  CardContent,
  Typography,
  Card,
  Button,
} from "@material-ui/core";
const CustomCard = ({Title,Price,Category,ProductImg}) => {
  return (
    <Card sx={{ maxWidth: 100, height: 40 }}>
      <CardContent>
        <img src={ProductImg} alt="Photos" height="80" title="" />
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
          {Title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ textOverflow: "ellipsis", wordWrap: "break-word" }}
        >
          ${Price}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ textOverflow: "ellipsis", wordWrap: "break-word" }}
        >
          {Category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          text="Add to Cart"
          variant="contained"
        //   onClick={() => getProductDetails(cardItems)}
        >
          Add to Cart 
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
