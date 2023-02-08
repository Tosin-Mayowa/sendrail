import React from "react";
import {
  Grid,
  GridItem,
  useTheme,
  Tabs,
  useMediaQuery,
} from "@chakra-ui/react";

import SideBar from "../Component/Dashboard/SideBar";
import DashHeader from "../Component/Dashboard/DashHeader";
import DashPanels from "../Component/Dashboard/DashTabs";

function Dashbord() {
  const theme = useTheme();
  const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");

  return (
    <Tabs>
      <Grid
        gridTemplateColumns={isSmallerScreen ? "100%" : "19% 81%"}
      >
        {
          !isSmallerScreen &&
          <GridItem
            bg={theme.colors.primary.main}
          >
            <SideBar />
          </GridItem>
        }
        <GridItem position="relative">
          <DashHeader />
          <DashPanels />
        </GridItem>
      </Grid>
    </Tabs>
  );
}

export default Dashbord;
