import { Stack, Link, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import cart from "@/images/cart.svg";
import megaMenu from "@/images/megaMenu.svg";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
const BottomHeader = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      py={2}
      px={4}
      sx={{
        border: "1px solid #ececec",
      }}
    >
      <Stack direction={"row"} spacing={2}>
        <Button color="success">
          <Stack alignItems={"center"}>
            <HelpOutlineIcon color="success" />
            <Typography
              variant="subtitle2"
              color="#047857"
              fontFamily={"Tajawal"}
              fontSize={"12px"}
            >
              المساعدة
            </Typography>
          </Stack>
        </Button>
        <Button color="success">
          <Stack alignItems={"center"}>
            <PermIdentityIcon color="success" />
            <Typography
              variant="subtitle2"
              color="#047857"
              fontFamily={"Tajawal"}
              fontSize={"12px"}
            >
              تسجيل الدخول
            </Typography>
          </Stack>
        </Button>
        <IconButton>
          <Image src={cart} alt="cart" />
        </IconButton>
      </Stack>
      <Stack direction={"row"} component={"nav"} className="links">
        <Link href="#" underline="none" color="initial" fontWeight={700} p={2}>
          الإضاءة
        </Link>
        <Link href="#" underline="none" color="initial" fontWeight={700} p={2}>
          ألواح الجدران الجافة
        </Link>
        <Link href="#" underline="none" color="initial" fontWeight={700} p={2}>
          الطابوق والطوب
        </Link>
        <Link href="#" underline="none" color="initial" fontWeight={700} p={2}>
          الرمال و الكنكري
        </Link>
        <Link href="#" underline="none" color="initial" fontWeight={700} p={2}>
          اسمنت وغراء لاصق
        </Link>
        <Link href="#" underline="none" color="initial" fontWeight={700} p={2}>
          أرض المصنع
        </Link>
        <Link href="#" underline="none" bgcolor={"#eff6f4"} p={1}>
          <Stack direction={"row"} spacing={1}>
            <Image src={megaMenu} alt="megaMenu" />
            <Typography
              variant="subtitle1"
              color="green"
              fontWeight={700}
              fontFamily={"Tajawal"}
            >
              تصفح كل الفئات
            </Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

export default BottomHeader;
