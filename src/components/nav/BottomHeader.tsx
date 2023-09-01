import {
  Stack,
  Link,
  Button,
  IconButton,
  Typography,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import cart from "@/images/cart.svg";
import megaMenu from "@/images/megaMenu.svg";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloseIcon from "@mui/icons-material/Close";
import logo from "@/images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
const BottomHeader = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
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
      <IconButton
        className="megaMenu"
        color="success"
        onClick={() => setMenuActive(true)}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Stack
        direction={"row"}
        component={"nav"}
        className={menuActive ? "links active" : "links"}
      >
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
        <Stack
          direction={"row-reverse"}
          justifyContent={"space-between"}
          className="logo"
          width={"100%"}
          mb={2}
          p={2}
          borderBottom={"1px solid #ccc"}
        >
          <Image src={logo} alt="logo" width={150} />
          <IconButton onClick={() => setMenuActive(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BottomHeader;
