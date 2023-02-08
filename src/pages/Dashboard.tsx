import React from "react";
import { Grid, GridItem, useTheme, Tabs } from "@chakra-ui/react";

import SideBar from "../Component/Dashboard/SideBar";
import DashHeader from "../Component/Dashboard/DashHeader";
import DashPanels from "../Component/Dashboard/DashTabs";

function Dashbord() {
  const theme = useTheme();

  return (
    <Tabs>
      <Grid gridTemplateColumns="19% 81%">
        <GridItem bg={theme.colors.primary.main}>
          <SideBar />
        </GridItem>
        <GridItem position="relative">
          <DashHeader />
          <DashPanels />
        </GridItem>
      </Grid>
    </Tabs>
  );
}

export default Dashbord;
