"use client";
import Navbar from "@/components/nav/Navbar";
import "../dist/css/styles.css";
import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
export const metadata: Metadata = {
  title: "Home | بوابة مشيد",
  description: "masheed Gate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
