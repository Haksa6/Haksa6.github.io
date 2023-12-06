import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import javascriptLogo from "./images/javasciptLogo.png";
import typescriptLogo from "./images/typescriptLogo.png";
import reactLogo from "./images/reactLogo.png";
import mongodbLogo from "./images/mongodbLogo.png";
import graphqlLogo from "./images/graphqlLogo.png";
import chakraLogo from "./images/chakraLogo.png";
import scssLogo from "./images/scssLogo.png";
import battleshipGif from "./images/Battleship.gif";
import stackoverFlow from "./images/screenshotstackoverflow.png";
import chatapp from "./images/Chatapp.gif";

const Projects = () => {
  const openNewWebsite = () => {
    window.open("https://jocular-khapse-896f1e.netlify.app/", "_blank");
  };

  return (
    <Box
      as="section"
      id="projects"
      padding={{ base: "8rem 0", xl: "15rem 0" }}
      backgroundColor={"#f9f9f9"}
      overflowX={"hidden"}
    >
      <Box
        margin={"0 auto"}
        maxW={"107rem"}
        padding={{ base: "0 1.7rem", sm: "0 4rem" }}
      >
        <Flex
          flexDirection={"column"}
          textAlign={{ base: "center", md: "start" }}
          margin={"0"}
        >
          <Text
            fontSize={"1.7rem"}
            fontWeight={"700"}
            textTransform={"uppercase"}
            color={"blue.400"}
            marginBottom={"1rem"}
          >
            Portfolio
          </Text>
          <Heading as={"h3"} fontSize={"2.5rem"} marginBottom={"6rem"}>
            I try to learn something new with all of my projects
          </Heading>

          <Grid
            gap={"5rem"}
            gridTemplateColumns={"1fr"}
            gridTemplateRows={"auto auto"}
            height={"auto"}
            width={"100%"}
          >
            <GridItem
              display={"flex"}
              boxShadow={"0 0 10px rgba(0,0,0,.1)"}
              borderRadius={"1.7rem"}
              flexDirection={{ base: "column", xl: "row" }}
              gap={{ base: "3rem", xl: "8rem" }}
              height={{ base: "65rem", xl: "40rem" }}
              padding={"2rem"}
              margin={{ base: "0 auto", xl: "0" }}
              width={{ base: "fit-content", xl: "100%" }}
            >
              <Box
                backgroundColor={"hsla(0,0%,46%,.2)"}
                borderRadius={"1.7rem"}
                boxShadow={"0 0 10px rgba(0,0,0,.1)"}
                height={"auto"}
                overflow={"hidden"}
                width={{ base: "100%", md: "53rem" }}
              >
                <Image
                  src={battleshipGif}
                  height={"100%"}
                  width={"100%"}
                ></Image>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                height={"auto"}
                justifyContent={"center"}
                textAlign={"center"}
                width={"30rem"}
                margin={{ base: "0 auto", xl: "" }}
              >
                <Heading
                  display={"flex"}
                  as={"h3"}
                  alignItems={"center"}
                  fontSize={"1.7rem"}
                  gap={"0.2rem"}
                  justifyContent={"center"}
                  marginBottom={"2rem"}
                  position={"relative"}
                  textTransform={"uppercase"}
                >
                  {" "}
                  Battleship game
                </Heading>
                <Text
                  color={"#767676"}
                  fontSize={"1.7rem"}
                  fontWeight={"500"}
                  textAlign={"center"}
                  textTransform={"none"}
                >
                  A battleship game where you can play against a simple
                  computer. Build using Javascript, React, SCSS.
                </Text>
                <Flex gap={"1rem"} justifyContent={"center"} marginTop={"1rem"}>
                  <Image
                    src={javascriptLogo}
                    borderRadius={"1.7rem"}
                    width={"55px"}
                  ></Image>
                  <Image
                    src={reactLogo}
                    borderRadius={"1.7rem"}
                    width={"55px"}
                  ></Image>
                  <Image
                    src={scssLogo}
                    borderRadius={"1.7rem"}
                    width={"55px"}
                  ></Image>
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-evenly"}
                  marginTop={"3rem"}
                  gap={"1rem"}
                  fontSize={"1.7rem"}
                  flexDirection={"row"}
                >
                  <a
                    aria-label="github"
                    href="https://github.com/Haksa6/battleship"
                    rel="noreferrer"
                    target="_blank"
                    fontWeight={"500"}
                    gap={"5px"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                  <Button
                    backgroundColor={"#2D2E32"}
                    transition={
                      "transform 0.15s ease-out, background 0.15s ease-out"
                    }
                    _hover={{ transform: "scale(1.05, 1.05)" }}
                    variant={"outline"}
                    fontSize={"1.7rem"}
                    alignItems={"center"}
                    borderRadius={"30px"}
                    height={"auto"}
                    padding={"1rem"}
                    onClick={openNewWebsite}
                  >
                    Live app
                  </Button>
                </Flex>
              </Box>
            </GridItem>

            <GridItem
              display={"flex"}
              boxShadow={"0 0 10px rgba(0,0,0,.1)"}
              borderRadius={"1.7rem"}
              flexDirection={{ base: "column", xl: "row-reverse" }}
              gap={{ base: "3rem", xl: "8rem" }}
              height={{ base: "65rem", xl: "40rem" }}
              padding={"2rem"}
              margin={{ base: "0 auto", xl: "" }}
              width={{ base: "fit-content", xl: "100%" }}
            >
              <Box
                backgroundColor={"hsla(0,0%,46%,.2)"}
                borderRadius={"1.7rem"}
                boxShadow={"0 0 10px rgba(0,0,0,.1)"}
                height={"auto"}
                overflow={"hidden"}
                width={{ base: "100%", md: "53rem" }}
              >
                <Image
                  src={stackoverFlow}
                  height={"100%"}
                  width={"100%"}
                ></Image>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                height={"auto"}
                justifyContent={"center"}
                textAlign={"center"}
                width={"30rem"}
                margin={{ base: "0 auto", xl: "" }}
              >
                <Heading
                  display={"flex"}
                  as={"h3"}
                  alignItems={"center"}
                  fontSize={"1.7rem"}
                  gap={"0.2rem"}
                  justifyContent={"center"}
                  marginBottom={"2rem"}
                  position={"relative"}
                  textTransform={"uppercase"}
                >
                  {" "}
                  Better stackoverflow
                </Heading>
                <Text
                  color={"#767676"}
                  fontSize={"1.7rem"}
                  fontWeight={"500"}
                  textAlign={"center"}
                  textTransform={"none"}
                >
                  A better stackoverflow website that allows users to login,
                  register, upload, comment and vote on posts. Build using
                  Javascript, React, ChakraUI, NodeJS and MongoDB.
                </Text>
                <Flex gap={"1rem"} justifyContent={"center"} marginTop={"1rem"}>
                  <Image
                    src={javascriptLogo}
                    borderRadius={"1.7rem"}
                    width={"55px"}
                  ></Image>
                  <Image
                    src={reactLogo}
                    borderRadius={"1.7rem"}
                    width={"55px"}
                  ></Image>
                  <Image
                    src={mongodbLogo}
                    borderRadius={"1.7rem"}
                    width={"55px"}
                  ></Image>
                  <Image
                    src={chakraLogo}
                    borderRadius={"1.7rem"}
                    width={"55px"}
                  ></Image>
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-evenly"}
                  marginTop={"3rem"}
                  gap={"1rem"}
                  fontSize={"1.7rem"}
                  flexDirection={"row"}
                >
                  <a
                    aria-label="github"
                    href="https://github.com/Haksa6/stackoverflow-copy-project"
                    rel="noreferrer"
                    target="_blank"
                    fontWeight={"500"}
                    gap={"5px"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                </Flex>
              </Box>
            </GridItem>
            <GridItem
              display={"flex"}
              boxShadow={"0 0 10px rgba(0,0,0,.1)"}
              borderRadius={"1.7rem"}
              flexDirection={{ base: "column", xl: "row" }}
              gap={{ base: "3rem", xl: "8rem" }}
              height={{ base: "65rem", xl: "40rem" }}
              padding={"2rem"}
              margin={{ base: "0 auto", xl: "0" }}
              width={{ base: "fit-content", xl: "100%" }}
            >
              <Box
                backgroundColor={"hsla(0,0%,46%,.2)"}
                borderRadius={"1.7rem"}
                boxShadow={"0 0 10px rgba(0,0,0,.1)"}
                height={"auto"}
                overflow={"hidden"}
                width={{ base: "100%", md: "53rem" }}
              >
                <Image src={chatapp} height={"100%"} width={"100%"}></Image>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                height={"auto"}
                justifyContent={"center"}
                textAlign={"center"}
                width={"30rem"}
                margin={{ base: "0 auto", xl: "" }}
              >
                <Heading
                  display={"flex"}
                  as={"h3"}
                  alignItems={"center"}
                  fontSize={"1.7rem"}
                  gap={"0.2rem"}
                  justifyContent={"center"}
                  marginBottom={"2rem"}
                  position={"relative"}
                  textTransform={"uppercase"}
                >
                  {" "}
                  Chat app
                </Heading>
                <Text
                  color={"#767676"}
                  fontSize={"1.7rem"}
                  fontWeight={"500"}
                  textAlign={"center"}
                  textTransform={"none"}
                >
                  An instant chat application that allows adding people and
                  joining channels. Build with React Native, MongoDB, NodeJS,
                  Typescript and GraphQL
                </Text>
                <Flex gap={"1rem"} justifyContent={"center"} marginTop={"1rem"}>
                  <Image
                    src={typescriptLogo}
                    borderRadius={"1.7rem"}
                    width={"55px"}
                  ></Image>
                  <Image
                    src={mongodbLogo}
                    borderRadius={"1.7rem"}
                    width={"55px"}
                  ></Image>
                  <Image
                    src={reactLogo}
                    borderRadius={"1.7rem"}
                    width={"55px"}
                  ></Image>
                  <Image
                    src={graphqlLogo}
                    borderRadius={"1.7rem"}
                    width={"55px"}
                  ></Image>
                </Flex>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-evenly"}
                  marginTop={"3rem"}
                  gap={"1rem"}
                  fontSize={"1.7rem"}
                  flexDirection={"row"}
                >
                  <a
                    aria-label="github"
                    href="https://github.com/Haksa6/react-native-chatapp"
                    rel="noreferrer"
                    target="_blank"
                    fontWeight={"500"}
                    gap={"5px"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="tabler-icon tabler-icon-brand-github"
                    >
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                  </a>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </Box>
  );
};

export default Projects;
