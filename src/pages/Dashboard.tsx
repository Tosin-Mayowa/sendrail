import React from "react";
import {
  Flex,
  Grid,
  InputLeftElement,
  GridItem,
  InputGroup,
  Input,
  useTheme,
  Text,
  Box,
  Avatar,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { FiBell } from "react-icons/fi";
import SideBar from "../Component/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const Dashbord = () => {
      const theme = useTheme();
     
  return (
    <Grid templateColumns="15% 85%" gap={0.5}>
      <GridItem
      
        w="100%"
        h="100%"
        bg={theme.colors.primary.main}
      >
        <SideBar />
      </GridItem>
      <GridItem
        w="100%"
        h="100px"
        bg=""
        borderBottom="1px solid rgba(220, 219, 234, 0.4)"
      >
        <Flex>
          <InputGroup mt="28px" mb="34px" ml="5%">
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              width="40%"
              fontWeight="500"
              fontSize="12px"
              lineHeight="14px"
              placeholder="Search by tracking number or location ..."
            />
          </InputGroup>
          <Flex>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              padding="2px 10px"
              mt="31px"
              mb="37px"
              mr="38px"
              background="#AAAAAA"
              borderRadius="12px"
            >
              <FiBell width="12" height="13px" color="#fff" />
              <Text
                fontWeight="450"
                fontSize="12px"
                lineHeight="14px"
                ml="3px"
                mt="-1px"
                color="#FFFFFF"
              >
                0
              </Text>
            </Box>
            <Flex mt="26px" mb="32px">
              <Avatar
                mr="11px"
                size="md"
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />
              <Flex flexDir="column" width="72px">
                <Text
                  fontSize="16px"
                  lineHeight="26px"
                  fontWeight="500"
                  color="#7C7C88"
                >
                  Jon De
                </Text>
                <Text
                  fontSize="12px"
                  lineHeight="14px"
                  fontWeight="450"
                  color="#7C7C88"
                >
                  Admin
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDir="column" width="100%">
          <Outlet />
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Dashbord;
