"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import latest1 from "@/images/lat1.jpg";
import latest2 from "@/images/lat2.jpg";
import l1 from "@/images/latest/latest1.jpg";
import l2 from "@/images/latest/latest2.jpg";
import l3 from "@/images/latest/latest3.jpg";
import l4 from "@/images/latest/latest4.jpg";
import l5 from "@/images/latest/latest5.jpg";
import ProductsCarousel from "../ProductsCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const DUMMY_BESTSELLER = [
  { name: "هوز كهرباء البنجر", img: l1, price: 33.35 },
  {
    name: " إعمار- طابوق مفرغ 3 خلية",
    img: l2,
    price: 1.96,
    availability: false,
  },
  { name: "شبك لياسة ألماني  VOLKERTEX- 20 cm X50 yard", img: l3, price: 46 },
  { name: " اليماتيك - فواصل البلاط", img: l4, price: 2.3 },
  { name: "غراء بلاط السيراميك - 'ساڤيتو' - 20Kg", img: l5, price: 22.83 },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Latest = () => {
  return (
    <Box p={2} mb={14} className="gridImages bestseller">
      <Typography
        variant="h6"
        component={"h2"}
        color="initial"
        fontFamily={"Tajawal"}
        textAlign={"right"}
        fontWeight={"800"}
        py={5}
      >
        منتجات مضافة حديثا
      </Typography>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-between"}
        spacing={2}
        sx={{ margin: "0 !important" }}
      >
        <Grid item lg={2} xs={12} ml={2} className="bestSellerImages">
          <Stack
            direction={{ lg: "column", xs: "row" }}
            spacing={{ lg: 6, xs: 3 }}
          >
            <Grid item>
              <Image src={latest1} alt="latest product" />
            </Grid>
            <Grid item>
              <Image src={latest2} alt="latest product" />
            </Grid>
          </Stack>
        </Grid>
        <Grid
          item
          lg={9}
          xs={12}
          sx={{
            paddingRight: "0 !important",
          }}
        >
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            rtl={true}
            renderArrowsWhenDisabled={true}
          >
            {DUMMY_BESTSELLER.map((item) => (
              <ProductsCarousel
                img={item.img}
                price={item.price}
                name={item.name}
                key={item.name}
                availability={item.availability}
              />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Latest;
