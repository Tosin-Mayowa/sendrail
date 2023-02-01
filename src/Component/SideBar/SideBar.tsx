import React,{useState} from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { AiOutlineSwitcher } from "react-icons/ai";
import Logo from "../../Asset/Logos/Onboarding/LOGO.png";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdLogin } from "react-icons/md";
import { RiEBike2Fill } from "react-icons/ri";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { HiUserGroup, HiLink } from "react-icons/hi";
import { TbLayoutNavbar, TbLayersSubtract } from "react-icons/tb";
import {Link} from "react-router-dom";
import './SideBar.css';
import { Box } from "@mui/material";
const SideBar = () => {
  const [actve,setDefault]=useState(true);
  const handleDefault=()=>{
    setDefault(true);
  }
  return (
    <Flex
      as={Box}
      flexDir="column"
      width="100%"
      pb="200px"
      pos="sticky"
      top="0px"
      left="0px"
      zIndex="7"
      height="100%"
    >
      <Image ml="35%" mt="40px" src={Logo} alt="logo.png" width="100px" />
      <Link to="/dashboard">
        <Flex ml="15%" mt="250px" alignContent="center" onClick={handleDefault}>
          <FaRegEnvelopeOpen
            color={actve ? "#F9C567" : "#fff"}
            width="24px"
            height="24px"
          />
          <Text
            fontWeight="500"
            color={actve ? "#F9C567" : "#fff"}
            fontSize="18px"
            lineHeight="30px"
            ml="4px"
            mt="-5px"
          >
            Dashboard
          </Text>
        </Flex>
      </Link>
      <Flex ml="15%" mt="43px">
        <AiOutlineSwitcher color="#fff" width="30px" height="30px" />
        <Text
          fontWeight="500"
          color="#fff"
          fontSize="18px"
          lineHeight="30px"
          mt="-6px"
          ml="4px"
        >
          Shipment
        </Text>
      </Flex>
      <Flex ml="15%" mt="43px">
        <HiUserGroup color="#fff" width="30px" height="30px" />
        <Text
          fontWeight="500"
          color="#fff"
          fontSize="18px"
          lineHeight="30px"
          ml="4px"
          mt="-6px"
        >
          Customer
        </Text>
      </Flex>
      <Flex ml="15%" mt="43px">
        <RiEBike2Fill color="#fff" width="30px" height="30px" />
        <Text
          fontWeight="500"
          color="#fff"
          fontSize="18px"
          lineHeight="30px"
          ml="4px"
          mt="-8px"
        >
          Rider
        </Text>
      </Flex>
      <Flex ml="15%" mt="43px">
        <TbLayoutNavbar
          fontWeight="600"
          color="#fff"
          width="30px"
          height="30px"
        />
        <Text
          fontWeight="500"
          color="#fff"
          fontSize="18px"
          lineHeight="30px"
          ml="4px"
          mt="-8px"
        >
          Payroll
        </Text>
      </Flex>
      <Flex ml="15%" mt="43px">
        <TbLayersSubtract
          fontWeight="600"
          color="#fff"
          width="30px"
          height="30px"
        />
        <Text
          fontWeight="500"
          color="#fff"
          fontSize="18px"
          lineHeight="30px"
          ml="4px"
          mt="-8px"
        >
          Transactions
        </Text>
      </Flex>
      <Flex ml="15%" mt="43px">
        <HiLink
          transform="rotateY(180deg)"
          fontWeight="600"
          color="#fff"
          width="30px"
          height="30px"
        />
        <Text
          fontWeight="500"
          color="#fff"
          fontSize="18px"
          lineHeight="30px"
          ml="4px"
          mt="-8px"
        >
          Manage Link
        </Text>
      </Flex>
      <Flex ml="15%" mt="43px">
        <AiTwotoneSetting
          fontWeight="600"
          color="#fff"
          width="30px"
          height="30px"
        />
        <Text
          fontWeight="500"
          color="#fff"
          fontSize="18px"
          lineHeight="30px"
          ml="4px"
          mt="-8px"
        >
          Settings
        </Text>
      </Flex>
      <Flex ml="15%" mt="43px">
        <MdLogin fontWeight="600" color="#fff" width="30px" height="30px" />
        <Text
          fontWeight="500"
          color="#fff"
          fontSize="18px"
          lineHeight="30px"
          ml="4px"
          mt="-8px"
        >
          Logout
        </Text>
      </Flex>
    </Flex>
  );
};
export default SideBar;
