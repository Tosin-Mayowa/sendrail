import React, { useState } from "react";
import {
  Flex, Grid, Image, Link, Tab, TabList, Text
} from "@chakra-ui/react";
import { AiOutlineSwitcher, AiTwotoneSetting } from "react-icons/ai";

import { MdLogin } from "react-icons/md";
import { RiEBike2Fill } from "react-icons/ri";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { HiUserGroup, HiLink } from "react-icons/hi";
import { TbLayoutNavbar, TbLayersSubtract } from "react-icons/tb";
import Logo from "../../Asset/Logos/Onboarding/LOGO.png";
function SideBar() {
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
      icon: <HiLink size="18px" />,
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
          mr="2px"
          ml="26px"
          flexDirection="column"
          fontWeight="500"
          color="#fff"
          fontSize="20px"
          lineHeight="30px"
          alignItems="flex-start"
          rowGap="20px"
        >
          {tab.map((item) => (
            <Tab
              p={0}
              py="10px"
              width="100%"
              fontWeight="500"
              color="#fff"
              fontSize="20px"
              textAlign="left"
              key={item.text}

              _selected={{
                borderRight: "5px solid #F9C567",
                color: "#F9C567"
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
