import React from "react";
import {
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  // Checks the width of the screen
  // md meaning 48em upwards so when the screen is under 48em isDesktop is set to false and the menu icon is shown
  const isDesktop = useBreakpointValue({ base: false, lg: "solid" });

  return (
    <Flex
      as="nav"
      alignItems="center"
      backgroundColor="#fff"
      boxShadow={"0 0 10px rgba(0,0,0,.09)"}
      fontSize={"1.7rem"}
      height={"auto"}
      justify="space-between"
      left={"0"}
      padding={{ base: "25px 30px", sm: "25px 40px 25px 50px" }}
      position={"fixed"}
      top={"0"}
      w={"100%"}
      zIndex={"200"}
    >
      <Heading as="h3">Weeti Hakonen</Heading>
      {isDesktop ? (
        <List display={"flex"} gap={"2rem"} fontWeight={"600"}>
          <ListItem>
            <Link onClick={() => handleScrollToSection("home")}>Home</Link>
          </ListItem>
          <ListItem>
            <Link onClick={() => handleScrollToSection("about")}>About</Link>
          </ListItem>
          <ListItem>
            <Link onClick={() => handleScrollToSection("projects")}>
              Projects
            </Link>
          </ListItem>
          <ListItem>
            <Link onClick={() => handleScrollToSection("contact")}>
              Contact
            </Link>
          </ListItem>
        </List>
      ) : (
        <Menu isLazy>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Options"
            color={"#2D2E32"}
            size={"200rem"}
          />
          <MenuList>
            <MenuItem
              color="#FFF"
              as="a"
              onClick={() => handleScrollToSection("home")}
            >
              Home
            </MenuItem>
            <MenuItem
              color="#FFF"
              as="a"
              onClick={() => handleScrollToSection("about")}
            >
              About
            </MenuItem>
            <MenuItem
              color="#FFF"
              as="a"
              onClick={() => handleScrollToSection("projects")}
            >
              Projects
            </MenuItem>
            <MenuItem
              color="#FFF"
              as="a"
              onClick={() => handleScrollToSection("contact")}
            >
              Contact
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Flex>
  );
};

export default Navbar;
