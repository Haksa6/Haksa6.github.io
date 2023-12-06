import React from "react";
import { Flex, Box, Heading, Text, Button } from "@chakra-ui/react";

const Home = () => {
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Flex
      as="section"
      id="home"
      backgroundColor={"#f9f9f9"}
      dir={"column"}
      height={"100vh"}
      position={"relative"}
      width={"100%"}
    >
      <Box margin={"0 auto"} maxW={"107rem"} padding={"0 4rem"}>
        <Flex
          align={"center"}
          height={"65rem"}
          justify={"center"}
          position={"relative"}
        >
          <Flex
            flexDirection={"column"}
            maxW={"60rem"}
            position={"relative"}
            alignItems={"center"}
          >
            <Heading
              as="h1"
              fontSize={"5.5rem"}
              marginBottom={"2rem"}
              marginTop={"2rem"}
            >
              Hi, I'm{" "}
              <Box as="span" color="blue.400">
                Weeti.
              </Box>
            </Heading>
            <Text
              color={"#555"}
              fontSize={"1.8rem"}
              lineHeight={"1.8"}
              fontWeight={"500"}
            >
              A Full-Stack Software Developer from Finland.
            </Text>
            <a
              aria-label="github"
              href="https://github.com/Haksa6"
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
              width={"100%"}
              onClick={() => handleScrollToSection("about")}
              variant={"outline"}
              fontSize={"1.7rem"}
              alignItems={"center"}
              gap={"1.5rem"}
              borderRadius={"30px"}
              height={"auto"}
              padding={"1rem"}
              backgroundColor={"#2D2E32"}
              transition={"transform 0.15s ease-out, background 0.15s ease-out"}
              _hover={{ transform: "scale(1.05, 1.05)" }}
              marginTop={"2rem"}
            >
              View my work! 👇
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;
// <Flex
//               as="span"
//               cursor={"pointer"}
//               gap={"1.3rem"}
//               margin={"2.5rem 0"}
//             >
//               <a
//                 aria-label="linkedin"
//                 href="https://www.linkedin.com/in/weeti-hakonen-6861751b9/"
//                 rel="noreferrer"
//                 target="_blank"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="32"
//                   height="32"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   class="tabler-icon tabler-icon-brand-linkedin"
//                 >
//                   <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
//                   <path d="M8 11l0 5"></path>
//                   <path d="M8 8l0 .01"></path>
//                   <path d="M12 16l0 -5"></path>
//                   <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
//                 </svg>
//               </a>
//               <a
//                 aria-label="github"
//                 href="https://github.com/Haksa6/"
//                 rel="noreferrer"
//                 target="_blank"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="32"
//                   height="32"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   class="tabler-icon tabler-icon-brand-github"
//                 >
//                   <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
//                 </svg>
//               </a>
//             </Flex>
