import React from "react";
import {
  Flex,
  Grid,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import '../styles/overview.css'
import { useNavigate } from "react-router-dom";
import InTransit from "./InTransit";
import ShareLink from "./ShareLink";
import MyWallet from "./MyWallet";
import Revenue from "./Revenue";
import MostVisited from "./MostVisited";
import BarChartOverview from "./BarChartOverview";
import StatusCard from "../../../shared/StatusCard";
import { cardDetails } from '../../../../data/cardDetails'

function Overview(): JSX.Element {
  const navigate = useNavigate()
  const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
  const [isSmallerThan480] = useMediaQuery("(max-width: 480px)");
  // const { setShipmentStatus } = DashboardStates()
  return (
    <Box
      w="100%"
      maxH="100vh"
      overflowY="scroll"
      className="overview"
      pr="10px"
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
        templateColumns={isSmallerScreen ? "1fr 1fr" : "repeat(4, 1fr)"}
        gap="10px"
      >
        {cardDetails.slice(0, 4)?.map((card) => (
          <StatusCard key={card.title} card={card} onclick={() => {
            navigate("/shipment", {
              state: {
                status: card.title
              }
            })
          }
          } />
        ))}
      </Grid>
      <Grid
        w="100%"
        mt="25px"
        gridTemplateColumns={isSmallerScreen ? "100%" : "65% 35%"}
      >
        <Flex
          flexDirection="column"
        >
          <ShareLink />
          <Flex
            w="100%"
            height="auto"
            flexWrap="nowrap"
            flexDirection={isSmallerThan480 ? "column" : "row"}
            justifyContent="space-between"
            alignItems="stretch"
            mt="20px"
            gap="15px"
            position="relative"
            overflow="hidden"
          >
            <MyWallet />
            <Revenue />
          </Flex>
          <Flex
            w="100%"
            height="auto"
            flexWrap="nowrap"
            justifyContent="space-between"
            flexDirection={isSmallerThan480 ? "column" : "row"}
            alignItems="stretch"
            mt="20px"
            gap="15px"
            position="relative"
            overflow="hidden"
          >
            <MostVisited />
            <BarChartOverview />
          </Flex>
        </Flex>
        <InTransit />
      </Grid>
    </Box>
  );
}

export default Overview;
