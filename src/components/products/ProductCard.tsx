import {
  Box,
  CardMedia,
  Grid,
  Stack,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
export interface categories {
  title: string;
  products: {
    name: string;
    imageSrc: string;
  }[];
}
[];

const ProductCard: React.FC<categories> = ({ title, products }) => {
  return (
    <Box border={"1px solid #333"} borderRadius={"6px"} p={2}>
      <Typography
        variant="h6"
        component={"h3"}
        color="initial"
        fontSize={"18px"}
        fontFamily={"Tajawal"}
        textAlign={"center"}
        fontWeight={"700"}
        pb={2}
      >
        {title}
      </Typography>
      <Grid container spacing={2} rowSpacing={4} direction={"row-reverse"}>
        {products.map((prod) => (
          <Grid item xs={6} key={prod.name}>
            <Box sx={{ position: "relative" }}>
              <CardMedia component="img" height="120" image={prod.imageSrc} />
              <Box
                sx={{
                  position: "absolute",
                  bottom: -20,
                  left: 0,
                  width: "100%",
                  bgcolor: "#047857",
                  color: "white",
                  padding: "3px",
                  textAlign: "center",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              >
                <Typography
                  fontFamily={"Tajawal"}
                  fontSize={"12px"}
                  variant="subtitle2"
                >
                  {prod.name}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Stack direction={"row"} pt={5} justifyContent={"center"}>
        <Button color="inherit" className="buttonArrow">
          <KeyboardArrowLeftIcon />
        </Button>
        <IconButton
          sx={{
            bgcolor: "#f7a726",
            color: "white",
            width: "30px",
            height: "30px",
            fontSize: "14px",
            "&:hover": {
              bgcolor: "#f7a726",
            },
          }}
        >
          1
        </IconButton>
        <Button color="inherit" className="buttonArrow">
          <KeyboardArrowRightIcon />
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductCard;
