import React from "react";
import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <Box as="section" id="contact" padding={"11rem 0"} backgroundColor={"#fff"}>
      <Box margin={"0 auto"} maxWidth={"107rem"} padding={"0 4rem"}>
        <Flex flexDirection={"column"}>
          <Text
            color={"blue.400"}
            textTransform={"uppercase"}
            marginBottom={"1rem"}
            fontWeight={"700"}
            fontSize={"1.7rem"}
          >
            Contact me
          </Text>
          <Heading as="h3">Get in touch with me at LinkedIn:</Heading>
          <Flex flexWrap={"wrap"} gap={"8rem"} marginTop={"4rem"}>
            <Button
              width={"100%"}
              as="a"
              href="https://www.linkedin.com/in/weeti-hakonen-6861751b9/"
              rel="noreferrer"
              target="_blank"
              variant={"outline"}
              fontSize={"1.7rem"}
              alignItems={"center"}
              gap={"1.5rem"}
              borderRadius={"30px"}
              cursor={"pointer"}
              height={"auto"}
              padding={"1rem"}
              backgroundColor={"#2D2E32"}
              transition={"transform 0.15s ease-out, background 0.15s ease-out"}
              _hover={{ transform: "scale(1.05, 1.05)" }}
              leftIcon={<BsLinkedin />}
            >
              Connect!
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;
