"use client";
import React from "react";
import cat1 from "@/images/categories/cat1.png";
import cat2 from "@/images/categories/cat2.png";
import cat3 from "@/images/categories/cat3.png";
import cat4 from "@/images/categories/cat4.png";
import cat5 from "@/images/categories/cat5.png";
import cat6 from "@/images/categories/cat6.png";
import cat7 from "@/images/categories/cat7.png";
import cat8 from "@/images/categories/cat8.png";
import cat9 from "@/images/categories/cat9.png";
import cat10 from "@/images/categories/cat10.png";
import cat11 from "@/images/categories/cat11.png";
import cat12 from "@/images/categories/cat12.png";
import cat13 from "@/images/categories/cat13.png";
import cat14 from "@/images/categories/cat14.png";
import { Box, Stack, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image, { StaticImageData } from "next/image";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 13,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 13,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3.5,
  },
};
const trademarks: {
  src: StaticImageData;
  title: string;
}[] = [
  { src: cat1, title: "أرض المصنع" },
  { src: cat2, title: "اسمنت وغراء لاصق" },
  { src: cat3, title: "الرمال و الكنكري" },
  { src: cat4, title: "الطابوق والطوب" },
  { src: cat5, title: "ألواح الجدران الجافة" },
  { src: cat6, title: "الإضاءة" },
  { src: cat7, title: "المعدات" },
  { src: cat8, title: "السباكة" },
  { src: cat9, title: "اخشاب" },
  { src: cat10, title: "أدوات صحية" },
  { src: cat11, title: "الحديد" },
  { src: cat12, title: "الكهرباء" },
  { src: cat13, title: "ملحقات الأرضية" },
  { src: cat14, title: "أدوات اعمال اللياسة" },
];
const ProductsCateg = () => {
  return (
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
        الفئات
      </Typography>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        rtl={true}
        renderArrowsWhenDisabled={true}
      >
        {trademarks.map((item) => (
          <Stack
            key={Date.now()}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              src={item.src}
              alt="trademark"
              className="trademarkImage"
              width={80}
              height={80}
            />
            <Typography
              variant="subtitle1"
              color={"#047857"}
              fontFamily={"Tajawal"}
              maxWidth={"80px"}
              textAlign={"center"}
              lineHeight={1.3}
              pt={1}
            >
              {item.title}
            </Typography>
          </Stack>
        ))}
      </Carousel>
    </Box>
  );
};

export default ProductsCateg;
