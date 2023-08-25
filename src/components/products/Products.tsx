import { Box, Grid, Typography, Card, CardMedia } from "@mui/material";
import React from "react";

const Products = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        component={"h2"}
        color="initial"
        fontFamily={"Tajawal"}
        textAlign={"right"}
        fontWeight={"700"}
        p={2}
      >
        افضل فئات المنتجات
      </Typography>
      <Grid container p={2} spacing={3}>
        <Grid item>
          <Box>
            <Typography
              variant="h6"
              component={"h3"}
              color="initial"
              fontFamily={"Tajawal"}
              textAlign={"center"}
              fontWeight={"500"}
            >
              اسمنت وغراء لاصق
            </Typography>
            <Card>
              <CardMedia
                title="اسمنت أبيض"
                image="../../images/products/1-1.jpg"
              />
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Products;
