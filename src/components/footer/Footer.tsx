import {
  Box,
  Chip,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import f1 from "@/images/footer/f1.png";
import f2 from "@/images/footer/f2.svg";
import f3 from "@/images/footer/f3.svg";
import f4 from "@/images/footer/f4.png";
import f5 from "@/images/footer/f5.svg";
import f6 from "@/images/footer/f6.svg";
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "success.main" }} component={"footer"}>
      <Container maxWidth={"xl"}>
        <Grid direction={"row-reverse"} container spacing={6}>
          <Grid item lg={4} justifyItems={"flex-start"}>
            <Typography
              variant="h6"
              color="secondary"
              fontWeight={"700"}
              textAlign={{ xs: "center", sm: "right" }}
              width={"100%"}
              gutterBottom
            >
              أفضل الفئات
            </Typography>
            <Stack
              direction={"row-reverse"}
              columnGap={1}
              flexWrap={"wrap"}
              justifyContent={{ xs: "center" }}
              rowGap={1}
              pb={2}
            >
              <Chip
                label="أرض المصنع"
                component="a"
                href="#"
                clickable
                color="info"
                sx={{ fontSize: "16px" }}
              />
              <Chip
                label="اسمنت و غراء لاصق"
                component="a"
                href="#"
                clickable
                color="info"
                sx={{ fontSize: "16px" }}
              />
              <Chip
                label="الرمال و الكنكري"
                component="a"
                href="#"
                clickable
                color="info"
                sx={{ fontSize: "16px" }}
              />
              <Chip
                label="الطابوق و الطوب"
                component="a"
                href="#"
                clickable
                color="info"
                sx={{ fontSize: "16px" }}
              />
              <Chip
                label="ألواح الجدران الجافة"
                component="a"
                href="#"
                clickable
                color="info"
                sx={{ fontSize: "16px" }}
              />
              <Chip
                label="الإضاءة"
                component="a"
                href="#"
                clickable
                color="info"
                sx={{ fontSize: "16px" }}
              />
              <Chip
                label="المعدات"
                component="a"
                href="#"
                clickable
                color="info"
                sx={{ fontSize: "16px" }}
              />
              <Chip
                label="السباكة"
                component="a"
                href="#"
                clickable
                color="info"
                sx={{ fontSize: "16px" }}
              />
            </Stack>
            <Image src={f1} alt="طرق الدفع" style={{ maxWidth: "100%" }} />
            <Stack
              direction={"row"}
              py={2}
              alignItems={"center"}
              spacing={2}
              justifyContent={"space-between"}
              sx={{
                img: {
                  width: "100%",
                  maxWidth: "200px",
                  verticalAlign: "center",
                  height: "auto",
                },
              }}
            >
              <Image src={f2} alt="مصرف الراجحي" />
              <Image src={f3} alt="معروف" />
            </Stack>
          </Grid>
          <Grid item lg={3.5}>
            <Stack
              justifyContent={{ xs: "center", sm: "space-between" }}
              direction={"row-reverse"}
              flexWrap={"wrap"}
              alignItems={"center"}
              spacing={2}
              gap={2}
            >
              <Box width={"60%"}>
                <Typography
                  variant="h5"
                  color="white"
                  fontWeight={"700"}
                  textAlign={{ xs: "center", sm: "right" }}
                >
                  قم بتنزيل تطبيقنا
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="white"
                  textAlign={{ xs: "center", sm: "right" }}
                  fontSize={{ xs: "14px", sm: "18px" }}
                >
                  كن أول من يتسوق ، واستمتع بمجموعة مواد البناء المميزة
                </Typography>
              </Box>
              <Box bgcolor={"white"} px={1} py={3} borderRadius={"6px"}>
                <Image src={f4} alt="qr code" width={70} />
              </Box>
            </Stack>
            <Stack
              justifyContent={"space-between"}
              spacing={1}
              direction={"row"}
              py={4}
              sx={{
                img: {
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: "165px",
                  verticalAlign: "center",
                  height: "auto",
                },
              }}
            >
              <Image src={f5} alt="app store" />
              <Image src={f6} alt="google play" />
            </Stack>
          </Grid>
          <Grid
            item
            lg={2}
            color={"white"}
            sx={{
              a: {
                "&:hover": {
                  color: "secondary.main",
                },
              },
            }}
          >
            <Typography
              variant="h6"
              color="secondary"
              fontWeight={"700"}
              textAlign={"right"}
              gutterBottom
            >
              روابط سريعة
            </Typography>
            <Stack rowGap={1}>
              <Link
                href="#"
                underline="none"
                textAlign={"right"}
                color={"white"}
              >
                اتصل بنا
              </Link>
              <Link
                href="#"
                underline="none"
                textAlign={"right"}
                color={"white"}
              >
                معلومات عنا
              </Link>
              <Link
                href="#"
                underline="none"
                textAlign={"right"}
                color={"white"}
              >
                الأسئلة الشائعة
              </Link>
              <Link
                href="#"
                underline="none"
                textAlign={"right"}
                color={"white"}
              >
                الشروط و الأحكام
              </Link>
              <Link
                href="#"
                underline="none"
                textAlign={"right"}
                color={"white"}
              >
                سياسة الأسترجاع
              </Link>
              <Link
                href="#"
                underline="none"
                textAlign={"right"}
                color={"white"}
              >
                سياسة الخصوصية
              </Link>
            </Stack>
          </Grid>
          <Grid
            item
            lg={2}
            color={"white"}
            sx={{
              a: {
                "&:hover": {
                  color: "secondary.main",
                },
              },
            }}
          >
            <Typography
              variant="h6"
              color="secondary"
              fontWeight={"700"}
              textAlign={"right"}
              gutterBottom
            >
              تواصل معنا
            </Typography>
            <Stack
              rowGap={1}
              sx={{
                a: {
                  "&:hover": {
                    color: "secondary.main",
                  },
                },
              }}
            >
              <Link
                href="#"
                underline="none"
                textAlign={"right"}
                color={"white"}
              >
                Twitter
              </Link>
              <Link
                href="#"
                underline="none"
                textAlign={"right"}
                color={"white"}
              >
                YouTube
              </Link>
              <Link
                href="#"
                underline="none"
                textAlign={"right"}
                color={"white"}
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                underline="none"
                textAlign={"right"}
                color={"white"}
              >
                Facebook
              </Link>
              <Link
                href="#"
                underline="none"
                textAlign={"right"}
                color={"white"}
              >
                WhatsApp
              </Link>
              <Link
                href="#"
                underline="none"
                textAlign={"right"}
                color={"white"}
              >
                Instagram
              </Link>
            </Stack>
          </Grid>
        </Grid>
        <Typography
          variant="h6"
          fontSize={{ xs: "14px" }}
          color="#c0dbd4"
          textAlign={"center"}
          py={2}
        >
          MasheedGate. All Rights Reserved 2023 ©
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
