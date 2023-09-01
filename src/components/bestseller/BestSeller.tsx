"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import best1 from "@/images/best1.jpg";
import best2 from "@/images/best2.jpg";
import b1 from "@/images/best/b1.jpg";
import b2 from "@/images/best/b2.jpg";
import b3 from "@/images/best/b3.jpg";
import b4 from "@/images/best/b4.jpg";
import b5 from "@/images/best/b5.png";
import b6 from "@/images/best/b6.jpg";
import b7 from "@/images/best/b7.jpg";
import b8 from "@/images/best/b8.png";
import b9 from "@/images/best/b9.png";
import b10 from "@/images/best/b10.jpg";
import b11 from "@/images/best/b11.jpg";
import b12 from "@/images/best/b12.jpg";
import b13 from "@/images/best/b13.jpg";
import b14 from "@/images/best/b14.jpg";
import b15 from "@/images/best/b15.jpg";
import b16 from "@/images/best/b16.jpg";
import b17 from "@/images/best/b17.jpg";
import ProductsCarousel from "../ProductsCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const DUMMY_BESTSELLER = [
  { name: "المنارتين- طابوق حرف U", img: b1, price: 2.91 },
  { name: "المنارتين - طابوق هوردي", img: b2, price: 1.96 },
  { name: "المنارتين - طابوق أبيض عازل", img: b3, price: 4.6 },
  { name: " المنارتين - طابوق مفرغ 3 خلية ", img: b4, price: 1.84 },
  { name: "مبيد وجاء مكافح النمل الابيض 20Kg ", img: b5, price: 149.5 },
  { name: "سفكو- طابوق عازل ازرق ", img: b6, price: 4.95 },
  { name: "خزان افقي -اس بي اتش 60 - 6000  لتر", img: b7, price: 3363.75 },
  {
    name: "خزان مياه افقي - اس بي اتش 40 - سعة 4000 لتر",
    img: b8,
    price: 2242.5,
  },
  {
    name: "خزان مياه افقي - اس بي اتش 30 - سعة 3000 لتر",
    img: b9,
    price: 1681.3,
  },
  { name: "سفكو- طابوق أبيض عازل", img: b10, price: 4.66 },
  { name: "سفكو- طابوق مفرغ 3 خلايا", img: b11, price: 1.84 },
  { name: "اسمنت الشمالية-  اسمنت أبيض ", img: b12, price: 24.53 },
  { name: "غراء بلاط البورسلين - 'سافيتو' - 20Kg", img: b13, price: 37.09 },
  { name: "غراء بلاط السيراميك - 'ساڤيتو' - 20Kg", img: b14, price: 22.83 },
  { name: "جبس الأهليه- جبس التلييس الجبس العادي", img: b15, price: 12.82 },
  { name: "اسمنت السعودية- اسمنت مقاوم للكبريتات", img: b16, price: 16.64 },
  { name: "اسمنت السعودية-  اسمنت بورتلاندي عادي", img: b17, price: 16.08 },
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
const BestSeller = () => {
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
        المنتجات الأفضل مبيعا
      </Typography>
      <Grid
        container
        direction={"row-reverse"}
        spacing={6}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item lg={2} mr={{ xs: 0, lg: 5 }} xs={12}>
          <Stack
            direction={{ xs: "row", lg: "column" }}
            spacing={6}
            alignItems={"center"}
            justifyContent={"center"}
            className="bestSellerImages"
          >
            <Grid item>
              <Image src={best1} alt="bestSeller" />
            </Grid>
            <Grid item>
              <Image src={best2} alt="bestSeller" />
            </Grid>
          </Stack>
        </Grid>
        <Grid
          item
          lg={9}
          xs={11}
          sx={{
            paddingLeft: "0 !important",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
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
              />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BestSeller;
