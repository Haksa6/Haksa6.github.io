import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "400px",
  md: "600px",
  lg: "900px",
  xl: "1020px",
  "2xl": "1536px",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({
  breakpoints,
  config,
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  styles: {
    global: {
      html: {
        fontSize: "62.5%",
        scrollBehavior: "smooth",
        margin: "0",
        padding: "0",
      },
      body: {
        backgroundColor: "#fff",
        position: "relative",
        color: "#2D2E32",
      },
      a: {
        _hover: {
          color: "blue.400",
        },
      },
    },
  },
});

export default theme;
