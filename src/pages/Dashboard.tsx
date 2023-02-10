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
import DashboardContext, { DashboardStates } from "../Contexts/DashboardContext";

function Dashboard() {
  const theme = useTheme();
  const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
  const { tabIndex, setTabIndex, dispatchView, views } = DashboardStates()

  const handleTabChange = (index) => {
    if (index === 8 && views.current_view !== "logout") {
      dispatchView({ type: "change_view", current_view: "logout" })
    } else if (index === 8 && views.current_view === "logout") {
      dispatchView({ type: "change_view", current_view: views.initial_view })
      setTabIndex(tabIndex)
    } else {
      setTabIndex(index)
    }
  }
  return (
    <Tabs index={tabIndex} onChange={handleTabChange}>
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

function Index(): JSX.Element {
  return (
    <DashboardContext>
      <Dashboard />
    </DashboardContext>
  )
}

export default Index;
