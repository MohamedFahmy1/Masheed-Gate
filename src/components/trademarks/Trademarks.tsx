"use client";
import { Box, Typography, Grid } from "@mui/material";
import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import trade1 from "@/images/companies/1.jpg";
import trade2 from "@/images/companies/2.jpg";
import trade3 from "@/images/companies/3.jpg";
import trade4 from "@/images/companies/4.jpg";
import trade5 from "@/images/companies/5.png";
import trade6 from "@/images/companies/6.jpg";
import trade7 from "@/images/companies/7.jpg";
import trade8 from "@/images/companies/8.jpg";
import trade9 from "@/images/companies/9.jpg";
import trade10 from "@/images/companies/10.jpg";
import trade11 from "@/images/companies/11.jpg";
import tr1 from "@/images/trade1.png";
import tr2 from "@/images/trade2.png";
import tr3 from "@/images/trade3.png";
import Image, { StaticImageData } from "next/image";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 15,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 15,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 8,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};
const trademarks: StaticImageData[] = [
  trade1,
  trade2,
  trade3,
  trade4,
  trade5,
  trade6,
  trade7,
  trade8,
  trade9,
  trade10,
  trade11,
];

const Trademarks = () => {
  return (
    <Box className="trademark">
      <Box py={2} px={4} my={4}>
        <Typography
          variant="h6"
          color="initial"
          component={"h2"}
          fontFamily={"Tajawal"}
          fontWeight={600}
          textAlign={"right"}
          gutterBottom
        >
          العلامات التجارية
        </Typography>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          ssr={false}
          rtl={true}
          renderArrowsWhenDisabled={true}
          infinite={true}
          autoPlay={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {trademarks.map((item) => (
            <Box key={Date.now()}>
              <Image src={item} alt="trademark" className="trademarkImage" />
            </Box>
          ))}
          {trademarks.map((item) => (
            <Box key={Date.now()}>
              <Image src={item} alt="trademark" className="trademarkImage" />
            </Box>
          ))}
        </Carousel>
      </Box>
      <Grid container spacing={3} px={2} className="tradeSection" pb={10}>
        <Grid item lg={8} xs={12}>
          <Image src={tr1} alt="بورسالين" />
        </Grid>
        <Grid item lg={2} xs={6}>
          <Image src={tr2} alt="اسمنت" />
        </Grid>
        <Grid item lg={2} xs={6}>
          <Image src={tr3} alt="اسمنت" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Trademarks;
