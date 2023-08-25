import React from "react";
import { Box } from "@mui/material";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
const Navbar = () => {
  return (
    <Box component={"header"}>
      <TopHeader />
      <BottomHeader />
    </Box>
  );
};

export default Navbar;
