import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";
import comp1 from "@/images/companies/1.jpg";
import comp2 from "@/images/companies/11.jpg";
import comp3 from "@/images/companies/10.jpg";
import comp4 from "@/images/companies/9.jpg";
import logo from "@/images/masheedlogo.svg";
import f1 from "@/images/frames/f1.png";
import f2 from "@/images/frames/f2.png";
import f3 from "@/images/frames/f3.png";
import f4 from "@/images/frames/f4.png";
import f5 from "@/images/frames/f5.png";
import f6 from "@/images/frames/f6.png";
import f7 from "@/images/frames/f7.png";
import f8 from "@/images/frames/f8.png";
import f9 from "@/images/frames/f9.png";
import BestSeller from "../bestseller/BestSeller";
import Latest from "../latest/Latest";
const RestOfPage = () => {
  return (
    <Box className="rest">
      <Typography
        variant="h5"
        component={"h2"}
        color={"initial"}
        fontFamily={"Tajawal"}
        fontWeight={700}
        textAlign={"center"}
        bgcolor={"#c0dbd4"}
        width={"fit-content"}
        mx={"auto"}
        p={2}
        borderRadius={"8px"}
        sx={{
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        أفضل العلامات التجارية
      </Typography>
      <Stack
        py={4}
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        position={"relative"}
      >
        <Image
          src={logo}
          alt="masheed logo"
          style={{ position: "absolute", left: 0, top: -50, width: "250px" }}
        />
        <Box border={"2px solid green"} borderRadius={"4px"} px={8} py={1}>
          <Image src={comp1} alt="اسمنت العربية" />
        </Box>
        <Box border={"2px solid green"} borderRadius={"4px"} px={8} py={1}>
          <Image src={comp2} alt="اسمنت الرياض" />
        </Box>
        <Box border={"2px solid green"} borderRadius={"4px"} px={8} py={1}>
          <Image src={comp3} alt="اسمنت الشرقية" />
        </Box>
        <Box border={"2px solid green"} borderRadius={"4px"} px={8} py={1}>
          <Image src={comp4} alt="اسمنت السعودية" />
        </Box>
      </Stack>
      <BestSeller />
      <Grid
        container
        direction={"row"}
        spacing={4}
        p={2}
        className="frameImages"
      >
        <Grid item lg={3}>
          <Image src={f1} alt="وفر أكثر" />
        </Grid>
        <Grid item lg={3}>
          <Image src={f2} alt="طرق دفع متنوعة" />
        </Grid>
        <Grid item lg={3}>
          <Image src={f3} alt="مجموعة واسعة من المنتحات" />
        </Grid>
        <Grid item lg={3}>
          <Image src={f4} alt="سرعة في الشحن" />
        </Grid>
        <Image src={f5} alt="أطلب الان" style={{ padding: "70px 16px" }} />
      </Grid>
      <Latest />
      <Grid
        container
        direction={"row"}
        spacing={4}
        p={2}
        className="frameImages"
      >
        <Grid item lg={6}>
          <Image src={f6} alt="خصم خاص" />
        </Grid>
        <Grid item lg={6}>
          <Image src={f7} alt="خصم خاص" />
        </Grid>
      </Grid>
      <BestSeller />
      <Grid
        container
        direction={"row"}
        spacing={4}
        p={2}
        pb={10}
        className="frameImages"
      >
        <Grid item lg={6}>
          <Image src={f8} alt="اسعار حصرية" />
        </Grid>
        <Grid item lg={6}>
          <Image src={f9} alt="خصم خاص" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RestOfPage;
