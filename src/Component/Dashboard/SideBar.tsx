import React, { useState } from "react";
import { Flex, Grid, Image, Link, Tab, TabList, Text } from "@chakra-ui/react";
import { AiOutlineSwitcher } from "react-icons/ai";
import Logo from "../../Asset/Logos/Onboarding/LOGO.png";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import { RiEBike2Fill } from "react-icons/ri";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { HiUserGroup, HiLink } from "react-icons/hi";
import { TbLayoutNavbar, TbLayersSubtract } from "react-icons/tb";
const SideBar = () => {
  const [tab] = useState<any>([
    {
      icon: <FaRegEnvelopeOpen size="18px" />,
      text: "Dashboard"
    },
    {
      icon: <AiOutlineSwitcher size="18px" />,
      text: "Shipment"
    },
    {
      icon: <HiUserGroup size="18px" />,
      text: "Customer"
    },
    {
      icon: <RiEBike2Fill size="18px" />,
      text: "Rider"
    },
    {
      icon: <TbLayoutNavbar size="18px" />,
      text: "Payroll"
    },
    {
      icon: <TbLayersSubtract size="18px" />,
      text: "Transactions"
    },
    {
      icon: <HiLink size="18px" transform="rotateY('180deg')" />,
      text: "Manage Link"
    },
    {
      icon: <AiTwotoneSetting size="18px" />,
      text: "Settings"
    },
    {
      icon: <MdLogin size="18px" />,
      text: "Logout"
    }
  ])

  return (
    <Flex
      border="none"
      flexDir="column"
      pos="sticky"
      top="0px"
      left="0px"
      zIndex="3"
      width="100%"
      height="100%"
    >
      <Grid
        pl="35px"
        w="100%"
        my="40px"
      >
        <Link href="/">
          <Image src={Logo} alt="Sendrail" />
        </Link>
      </Grid>
      <TabList>
        <Flex
          w="100%"
          mr="2px"
          flexDirection="column"
          fontWeight="500"
          color="#fff"
          fontSize="20px"
          alignItems="flex-start"
        >
          {tab.map((item) => (
            <Tab
              p="10px 35px"
              width="100%"
              fontWeight="500"
              color="#fff"
              fontSize="20px"
              textAlign="left"
              my="15px"
              key={item.text}
              // borderRight={item.text === "Dashboard" ? "5px solid #F9C567" : "none"}
              _selected={{
                borderRight: "5px solid #F9C567",
                color: "#F9C567"
              }}
            >
              <Flex
                placeItems="center"
                w="100%"
              // borderRadius="4px"
              // _hover={{
              //   background: "#16134f"
              // }}
              >
                {item.icon}
                <Text whiteSpace="nowrap" ml="8px">
                  {item.text}
                </Text>
              </Flex>
            </Tab>
          ))}
        </Flex>
      </TabList >
    </Flex >
  );
};
export default SideBar;
