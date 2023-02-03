import React from "react";
import {
  Flex,
  Grid,
  Box,
} from "@chakra-ui/react";
import Boxp from "../../../Asset/Logos/Onboarding/Boxplus.png";
import Group from "../../../Asset/Logos/Onboarding/Group.png";
import Bus from "../../../Asset/Logos/Onboarding/Bus.png";
import Pend from "../../../Asset/Logos/Onboarding/pend.png";
import Dashcard from "./Dashcard";
import './styles/overview.css'
import InTransit from "./InTransit";
import ShareLink from "./ShareLink";
import MyWallet from "./MyWallet";
import Revenue from "./Revenue";
import MostVisited from "./MostVisited";
import BarChartOverview from "./BarChartOverview";

const Overview = () => {
  const cardDetails = [
    { title: "Order", count: 1, url: Boxp },
    { title: "Pending", count: 1, url: Pend },
    { title: "In transit", count: 1, url: Bus },
    { title: "Delivered", count: 1, url: Group },
  ];
  return (
    <Box
      w="100%"
      maxH="100vh"
      overflowY="scroll"
      className="overview"
      p="10px"
    >
      <Box
        fontWeight="600"
        fontSize="24px"
        lineHeight="29px"
        color="#000000"
        mb="25px"
      >
        Dashboard Overview
      </Box>

      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="10px"
      >
        {cardDetails?.map((card) => (
          <Dashcard key={card.title} card={card} />
        ))}
      </Grid>
      <Grid
        w="100%"
        mt="25px"
        gridTemplateColumns="65% 35%"
      >
        <Flex
          flexDirection="column"
        >
          <ShareLink />
          <Grid
            maxW="100%"
            gridTemplateColumns="1fr 1fr"
            justifyContent="space-between"
            alignItems="stretch"
            mt="20px"
            gap="15px"
          >
            <MyWallet />
            <Revenue />
            <MostVisited />
            <BarChartOverview />
          </Grid>
        </Flex>
        <InTransit />
      </Grid>
    </Box>
  );
};

export default Overview;
