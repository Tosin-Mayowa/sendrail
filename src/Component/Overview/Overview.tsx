import React from "react";
import {
  Flex,
  Grid,
Button,
 useTheme,
  Text,
  Box,
  
} from "@chakra-ui/react";
import Boxp from "../../Asset/Logos/Onboarding/Boxplus.png";
import Group from "../../Asset/Logos/Onboarding/Group.png";
import Bus from "../../Asset/Logos/Onboarding/Bus.png";
import Pend from "../../Asset/Logos/Onboarding/pend.png";

import Dashcard from "../DashCard/Dashcard";
const Overview=()=>{
 const theme = useTheme();
 const url=" https://onboard. sendrail.com/dummyco";
 const cardDetails = [
   { title: "Order", count: 1, url: Boxp },
   { title: "Pending", count: 1, url: Pend },
   { title: "In transit", count: 1, url: Bus },
   { title: "Delivered", count: 1, url: Group },
 ];
    return (
      <>
        <Flex width="100%">
          <Box
            fontWeight="600"
            fontSize="24px"
            lineHeight="29px"
            color="#000000"
            mt="43px"
            ml="7%"
          >
            Dashboard Overview
          </Box>
        </Flex>

        <Grid
          mt="46px"
          ml="1%"
          mr="3%"
          width="92%"
          templateColumns="repeat(4, 1fr)"
          gap="10px"
        >
          {cardDetails?.map((card) => (
            <Dashcard key={card.title} card={card} />
          ))}
        </Grid>
        <Flex ml="2%" mt="40px">
          <Box
            border=" 1px solid #ABA7A7"
            width="701px"
            height="206px"
            padding="22px 14px 22px 14px"
          >
            <Text fontSize="16px" lineHeight="20px" color="#000000">
              Onboarding Link
            </Text>
            <Text fontSize="16px" lineHeight="20px" mt="20px" color=" #595956">
              Share your logistic imbedded link for customers to be able to
              onboard directly from you.{" "}
            </Text>
            <Box
              width="672px"
              height="41px"
              color="#F9C567"
              bg="rgba(7, 5, 41, 0.07)"
              padding="8px 152px"
              mt="15px"
            >
              {url}
            </Box>
            <Button
              width="74px"
              height="34px"
              fontSize="12px"
              fontWeight="500"
              color="#fff"
              lineHeight="20px"
              padding="7px 21px"
              bg="#070529"
              mt="14px"
            >
              Copy
            </Button>
          </Box>
          <Flex ml='46px'>
            <Text
              fontWeight="600"
              color=" #1F1F1F"
              fontSize="20px"
              lineHeight="30px"
            >
              Delivery in Transit
            </Text>
            <Flex>
              <Box
              mt="43px"
              >

              </Box>
            </Flex>
          </Flex>
        </Flex>
      </>
    );
}

export default Overview;