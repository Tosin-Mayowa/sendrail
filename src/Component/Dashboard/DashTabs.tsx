import { TabPanel, TabPanels, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Overview from "./Overview/Overview";

function Empty(): JSX.Element {
  return <Text>Not Yet Implemented</Text>;
}

function DashTabs(): JSX.Element {
  const [panels] = useState<any>([
    {
      key: 1,
      component: <Overview />,
    },
    {
      key: 2,
      component: <Empty />,
    },
    {
      key: 3,
      component: <Empty />,
    },
    {
      key: 4,
      component: <Empty />,
    },
    {
      key: 5,
      component: <Empty />,
    },
    {
      key: 6,
      component: <Empty />,
    },
    {
      key: 7,
      component: <Empty />,
    },
    {
      key: 8,
      component: <Empty />,
    },
    {
      key: 9,
      component: <Empty />,
    },
  ]);
  return (
    <TabPanels mt="90px">
      {panels?.map((item: any) => (
        <TabPanel key={item.key}>{item.component}</TabPanel>
      ))}
    </TabPanels>
  );
}

export default DashTabs;
