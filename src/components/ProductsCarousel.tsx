import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import { productsData } from "@/utils/types";

const ProductsCarousel: React.FC<productsData> = ({
  name,
  img,
  price,
  availability,
}) => {
  return (
    <Card
      sx={{
        paddingTop: "40px",
        border: "1px solid #ececec",
        margin: "0 10px 5px",
      }}
      className="girdImages"
    >
      <Image src={img} alt="bestseller" />
      <Typography
        variant="h6"
        component={"h3"}
        color={"initial"}
        textAlign={"right"}
        fontFamily={"Tajawal"}
        fontSize={"14px"}
        fontWeight={700}
        height={"80px"}
        p={2}
      >
        {name}
      </Typography>
      {availability === undefined ? (
        <Typography
          variant="h6"
          component={"h3"}
          color="green"
          textAlign={"right"}
          fontSize={"13px"}
          fontFamily={"Tajawal"}
          bgcolor={"#f3f4f6"}
          mx={2}
          p={1}
        >
          تبدأ من
          <br />
          <span className="price">{price}</span>
        </Typography>
      ) : (
        <Typography
          variant="h6"
          component={"h3"}
          color="initial"
          textAlign={"right"}
          fontSize={"13px"}
          fontFamily={"Tajawal"}
          fontWeight={800}
          bgcolor={"#f3f4f6"}
          mx={2}
          p={3}
        >
          هذا المنتج سيتوفر قريبا
          <br />
        </Typography>
      )}

      <Button
        disabled={availability === false ? true : false}
        variant="contained"
        sx={{
          backgroundColor: "#047857",
          margin: "15px",
          "&:hover": {
            backgroundColor: "#047857",
          },
        }}
        startIcon={<LocalMallIcon />}
      >
        <Typography
          variant="body1"
          fontSize={"18px"}
          fontFamily={"Tajawal"}
          textAlign={"center"}
          mx={2}
        >
          أضف إلي السلة
        </Typography>
      </Button>
    </Card>
  );
};

export default ProductsCarousel;
