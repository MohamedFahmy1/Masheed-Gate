import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import ProductCard from "./ProductCard";
import prod1_1 from "@/images/products/1-1.jpg";
import prod1_2 from "@/images/products/1-2.jpg";
import prod1_3 from "@/images/products/1-3.jpg";
import prod1_4 from "@/images/products/1-4.jpg";
import prod2_1 from "@/images/products/2-1.jpg";
import prod2_2 from "@/images/products/2-2.jpg";
import prod2_3 from "@/images/products/2-3.jpg";
import prod2_4 from "@/images/products/2-4.jpg";
import prod3_1 from "@/images/products/3-1.jpg";
import prod3_2 from "@/images/products/3-2.jpg";
import prod3_3 from "@/images/products/3-3.jpg";
import prod3_4 from "@/images/products/3-4.jpg";
import prod4_1 from "@/images/products/4-1.jpg";
import prod4_2 from "@/images/products/4-2.jpg";
import prod4_3 from "@/images/products/4-3.jpg";
import prod4_4 from "@/images/products/4-4.jpg";

import ProductsCateg from "./ProductsCateg";

const DUMMY_PRODUCTIONS = [
  {
    title: "اسمنت وغراء لاصق",
    products: [
      { name: "اسمنت رمادي", imageSrc: prod1_2.src },
      { name: "اسمنت ابيض", imageSrc: prod1_1.src },
      { name: "مسحوق الجبس", imageSrc: prod1_4.src },
      { name: "الغراء اللاصق", imageSrc: prod1_3.src },
    ],
  },
  {
    title: "السباكة",
    products: [
      { name: "مضخات", imageSrc: prod2_2.src },
      { name: "صمامات", imageSrc: prod2_1.src },
      { name: "سخانات المياه", imageSrc: prod2_4.src },
      { name: "مواسير الصرف الصحي", imageSrc: prod2_3.src },
    ],
  },
  {
    title: "المعدات",
    products: [
      { name: "أدوات يدوية", imageSrc: prod3_2.src },
      { name: "أدوات كهربائية", imageSrc: prod3_1.src },
      { name: "أدوات القياس", imageSrc: prod3_4.src },
      { name: "أدوات الحماية", imageSrc: prod3_3.src },
    ],
  },
  {
    title: "الطابوق والطوب",
    products: [
      { name: "الطابوق و الطوب الاسمنتي", imageSrc: prod4_2.src },
      { name: "الطابوق و الطوب الاحمر", imageSrc: prod4_1.src },
      { name: "الطابوق و الطوب الابيض", imageSrc: prod4_4.src },
      { name: "انترلوك", imageSrc: prod4_3.src },
    ],
  },
];
const Products = () => {
  return (
    <Box className="products">
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
        <Grid container p={2} spacing={3} direction={"row-reverse"}>
          {DUMMY_PRODUCTIONS.map((prod) => (
            <Grid item lg={3} key={prod.title}>
              <ProductCard title={prod.title} products={prod.products} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <ProductsCateg />
    </Box>
  );
};

export default Products;
