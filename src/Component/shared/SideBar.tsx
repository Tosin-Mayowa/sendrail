import React from "react";
import {
  Flex, Grid, Image, Link, Tab, TabList, Text
} from "@chakra-ui/react";
import Logo from "../../Asset/Logos/Onboarding/LOGO.png";
function SideBar({ tab }: {
  tab: {
    icon: JSX.Element,
    text: string
  }[]
}) {

  return (
    <Flex
      border="none"
      flexDir="column"
      pos="sticky"
      top="0px"
      left="0px"
      zIndex="3"
      width="100%"
      height="100vh"
    >
      <Grid
        w="100%"
        m="38px 0px 84px 28px"
        cursor="pointer"
        h="22px"
      >
        <Link href="/">
          <Image src={Logo} alt="Sendrail" />
        </Link>
      </Grid>
      <TabList border="none">
        <Flex
          w="100%"
          flexDirection="column"
          fontWeight="500"
          color="#fff"
          fontSize="20px"
          lineHeight="30px"
          alignItems="flex-start"
          rowGap="34px"
        >
          {tab.map((item) => (
            <Tab
              p="3px 2px 3px 26px"
              width="95%"
              borderRadius="10px"
              fontWeight="500"
              color="#fff"
              fontSize="20px"
              textAlign="left"
              key={item.text}
              _hover={{
                background: "#2A2847",
                borderRadius: "10px",
                width: "95%"
              }}

              _selected={{
                width: "100%",
                borderRadius: "0px",
                borderRight: "5px solid #F9C567",
                color: "#F9C567",
                _hover: {
                  background: "initial",
                }
              }}
            >
              <Flex
                placeItems="center"
                columnGap="20px"
                w="100%"
              >
                {item.icon}
                <Text whiteSpace="nowrap">
                  {item.text}
                </Text>
              </Flex>
            </Tab>
          ))}
        </Flex>
      </TabList >
    </Flex >
  );
}
export default SideBar;
