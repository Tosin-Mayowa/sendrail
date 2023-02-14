import React from "react";
import {useAuth} from "../lib/hooks/useAuth";
import { Grid, GridItem, useTheme, Tabs } from "@chakra-ui/react";

import SideBar from "../Component/Dashboard/SideBar";
import DashHeader from "../Component/Dashboard/DashHeader";
import DashPanels from "../Component/Dashboard/DashTabs";

function Dashbord() {
  const { auth } = useAuth();
  const theme = useTheme();
console.log({auth});

  return (
    <Tabs>
      <Grid gridTemplateColumns="19% 81%">
        <GridItem bg={theme.colors.primary.main}>
          <SideBar />
        </GridItem>
        <GridItem position="relative">
          <DashHeader auth={auth} />
          <DashPanels />
        </GridItem>
      </Grid>
    </Tabs>
  );
}

export default Dashbord;
