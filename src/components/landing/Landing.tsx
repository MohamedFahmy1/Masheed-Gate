"use client";
import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import landing1 from "@/images/landing1.png";
import landing2 from "@/images/landing2.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import slider1 from "@/images/slider1.png";
import slider2 from "@/images/slider2.png";
import slider3 from "@/images/slider3.png";
import slider4 from "@/images/slider4.png";
import slider5 from "@/images/slider5.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Landing = () => {
  return (
    <Grid container spacing={2} py={3} px={2} className="landing">
      <Grid container item direction={"column"} lg={3} spacing={4}>
        <Grid item>
          <Image src={landing1} alt="landing" />
        </Grid>
        <Grid item>
          <Image src={landing2} alt="landing" />
        </Grid>
      </Grid>

      <Grid item lg={9}>
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          ssr={true}
          rtl={true}
          renderArrowsWhenDisabled={true}
        >
          <Image src={slider1} alt="slider" />
          <Image src={slider2} alt="slider" />
          <Image src={slider3} alt="slider" />
          <Image src={slider4} alt="slider" />
          <Image src={slider5} alt="slider" />
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default Landing;
