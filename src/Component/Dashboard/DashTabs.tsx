import { TabPanel, TabPanels, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Overview from './Overview'
import OverviewContext from '../../Contexts/OverviewContext'
import Payroll from './Payroll'
import Shipment from './Shipment'
import Customer from './Customer'

function Empty(): JSX.Element {
  return <Text>Not Yet Implemented</Text>;
}

function DashTabs(): JSX.Element {
  const [panels] = useState<any>([
    {
      key: 1,
      component: (<OverviewContext><Overview /></OverviewContext>)
    },
    {
      key: 2,
      component: <Shipment />
    },
    {
      key: 3,
      component: <Customer />
    },
    {
      key: 4,
      component: <Empty />
    },
    {
      key: 5,
      component: <Payroll />
    },
    {
      key: 6,
      component: <Empty />
    },
    {
      key: 7,
      component: <Empty />
    },
    {
      key: 8,
      component: <Empty />
    },
    {
      key: 9,
      component: <Empty />
    }
  ])
  return (
    <TabPanels
      mt="80px"
      w="100%"
    >
      {
        panels?.map((item: any) => (
          <TabPanel key={item.key}>
            {item.component}
          </TabPanel>
        ))
      }
    </TabPanels>
  )
}

export default DashTabs