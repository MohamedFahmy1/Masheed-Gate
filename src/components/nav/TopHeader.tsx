import Image from "next/image";
import React from "react";
import logo from "@/images/logo.svg";
import {
  Button,
  Stack,
  MenuItem,
  TextField,
  InputAdornment,
  Typography,
  Grid,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TranslateIcon from "@mui/icons-material/Translate";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
const TopHeader = () => {
  return (
    <Grid
      container
      direction={"row"}
      alignItems={"center"}
      justifyContent={{ xs: "center", sm: "space-between" }}
      rowGap={1}
      p={1}
    >
      <Grid item order={1}>
        <Stack direction={"row"} alignItems={"center"}>
          <Button
            sx={{
              backgroundColor: "#047857",
              color: "white",
              fontFamily: "Tajawal",
              fontWeight: "400",
              fontSize: {
                sm: "16px",
              },
              "&:hover": {
                backgroundColor: "#198563",
              },
            }}
            variant="contained"
            size="large"
          >
            بيع علي مشيد
          </Button>
          <Button variant="text" color="success">
            <Stack
              direction={"row"}
              spacing={1}
              width={{ xs: "103px", sm: "100%" }}
            >
              <LocationOnIcon sx={{ color: "#047857" }} />
              <Typography variant="body1">اختر المدينة</Typography>
              <ArrowDropDownIcon sx={{ color: "#047857" }} />
            </Stack>
          </Button>
          <TextField
            select
            placeholder="العربية"
            sx={{
              width: {
                xs: "70px",
                sm: "120px",
              },
              backgroundColor: "white",
              fontFamily: "Tajawal",
            }}
            variant="standard"
            value={"ar"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TranslateIcon sx={{ color: "#047857" }} />
                </InputAdornment>
              ),
            }}
          >
            <MenuItem value="ar">العربية</MenuItem>
            <MenuItem value="en">English</MenuItem>
          </TextField>
        </Stack>
      </Grid>
      <Grid item className="searchComp" order={{ xs: 3, sm: 2 }}>
        <SearchIcon className="icon" />
        <input
          type="text"
          placeholder="ابحث عن المنتجات هنا"
          className="search"
        />
        <select name="items" id="items" className="selectItems">
          <option defaultChecked value={"1"}>
            الفئات
          </option>
          <option value={"2"}>ارض المصنع</option>
          <option value={"3"}>اسمنت و غراء لاصق</option>
          <option value={"4"}>الرمال و الكنكري</option>
          <option value={"5"}>الطابوق و الطوب</option>
          <option value={"6"}>الواح الجدران الجافة</option>
          <option value={"7"}>الإضاءة</option>
          <option value={"8"}>المعدات </option>
          <option value={"9"}>اخشاب</option>
          <option value={"10"}>أدوات صحية</option>
          <option value={"11"}>الكهرباء</option>
          <option value={"12"}>ملحقات الأرضية</option>
          <option value={"13"}>أدوات اعمال اللياسة</option>
        </select>
      </Grid>
      <Grid item order={2}>
        <Image src={logo} alt="logo" width={190} height={52} />
      </Grid>
    </Grid>
  );
};

export default TopHeader;
