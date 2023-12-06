import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Footer = () => {
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Flex
      as="footer"
      backgroundColor={"#2D2E32"}
      padding={"5rem 0"}
      width={"100%"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"160px"}
      position={"relative"}
    >
      <Heading as="h3" color={"#FFF"}>
        Weeti Hakonen
      </Heading>
      <Box
        as={motion.div}
        position={"absolute"}
        onClick={() => handleScrollToSection("home")}
        top={"-25px"}
        width={"40px"}
        height={"45px"}
        left={"0"}
        right={"0"}
        marginRight={"auto"}
        marginLeft={"auto"}
        textAlign={"center"}
        backgroundColor={"blue.400"}
        cursor={"pointer"}
        whileHover={{ scale: 1.1 }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 24 24"
        >
          <title></title>
          <path
            fill="#fafafa"
            d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
          ></path>
        </svg>
      </Box>
    </Flex>
  );
};

export default Footer;
