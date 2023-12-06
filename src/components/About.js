import React from "react";
import { Box, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <Box as="section" id="about" padding={{ base: "8rem 0", xl: "15rem 0" }}>
      <Box margin={"0 auto"} maxW={"107rem"} padding={"0 4rem"}>
        <Grid
          alignItems={"center"}
          gridTemplateColumns={{ base: "1fr", xl: "1fr 1fr" }}
          justifyContent={"center"}
          textAlign={{ base: "center", xl: "start" }}
        >
          <GridItem position={"relative"}>
            <Image
              src={
                "https://skillicons.dev/icons?i=git,github,aws,jest,nodejs,c,javascript,typescript,python,react,postgres,mongodb,css,html,graphql&perline=5"
              }
              borderRadius={"1.7rem"}
              height={"35rem"}
              width={"41rem"}
              marginBottom={{ base: "3.5rem", xl: "" }}
              margin={"3.5rem auto"}
            ></Image>
          </GridItem>
          <GridItem
            paddingRight={"1.5rem"}
            margin={{ base: "0 auto", xl: "" }}
            maxW={{ base: "54rem", xl: "" }}
          >
            <Heading
              as="h3"
              fontSize={"1.7rem"}
              fontWeight={"700"}
              textTransform={"uppercase"}
              color={"blue.400"}
              marginBottom={"1rem"}
            >
              {" "}
              About me
            </Heading>
            <Heading
              as="h4"
              fontSize={"2.5rem"}
              lineHeight={"1.4"}
              marginBottom="2rem"
            >
              {" "}
              A dedicated Full-Stack Developer and a Computer Science Student 🎓{" "}
            </Heading>
            <Text
              color="#555"
              fontSize={"1.7rem"}
              fontWeight={"500"}
              lineHeight={"1.5"}
            >
              As a Full-Stack Developer, I possess an impressive arsenal of
              skills in{" "}
              <Box as="span" color={"blue.400"}>
                {" "}
                JavaScript
              </Box>
              ,{" "}
              <Box as="span" color={"blue.400"}>
                {" "}
                React
              </Box>
              ,{" "}
              <Box as="span" color={"blue.400"}>
                {" "}
                NodeJS
              </Box>
              ,{" "}
              <Box as="span" color={"blue.400"}>
                {" "}
                MongoDB
              </Box>{" "}
              ,{" "}
              <Box as="span" color={"blue.400"}>
                {" "}
                SQL
              </Box>{" "}
              and{" "}
              <Box as="span" color={"blue.400"}>
                {" "}
                mobile development.
              </Box>{" "}
              I excel in designing and maintaining responsive applications that
              offer a smooth user experience. Currently, I am pursuing my
              master's degree at LUT University and actively seeking
              opportunities in the vast realm of computer science. My expertise
              lies in writing clean and optimized code and utilizing
              cutting-edge development tools and techniques. I have a long
              history of working in international environments and I'm a team
              player who thrives in collaborating with cross-functional teams to
              produce outstanding applications.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
