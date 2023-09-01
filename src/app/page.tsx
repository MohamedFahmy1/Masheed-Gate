"use client";
import BestSeller from "@/components/bestseller/BestSeller";
import Footer from "@/components/footer/Footer";
import Landing from "@/components/landing/Landing";
import Latest from "@/components/latest/Latest";
import Navbar from "@/components/nav/Navbar";
import Products from "@/components/products/Products";
import RestOfPage from "@/components/restOfPage/RestOfPage";
import Trademarks from "@/components/trademarks/Trademarks";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#f7a726",
    },
    success: {
      main: "#047857",
      dark: "#14342b",
    },
    info: {
      main: "#e6f1ee",
      dark: "#c0ddd5",
    },
  },
  typography: {
    fontFamily: ["Tajawal", "sans-serif"].join(","),
  },
});
export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Landing />
        <Trademarks />
        <Products />
        <BestSeller />
        <Latest />
        <RestOfPage />
        <Footer />
      </ThemeProvider>
    </main>
  );
}
