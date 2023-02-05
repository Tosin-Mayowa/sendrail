import { TabPanel, TabPanels, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Overview from './Overview'
import OverviewContext from '../../Contexts/OverviewContext'

const Empty = (): JSX.Element => {
    return (
        <>
            <Text>Not Yet Implemented</Text>
        </>
    )
}

const DashTabs = (): JSX.Element => {
    const [panels] = useState<any>([
        {
            key: 1,
            component: (<OverviewContext><Overview /></OverviewContext>)
        },
        {
            key: 2,
            component: <Empty />
        },
        {
            key: 3,
            component: <Empty />
        },
        {
            key: 4,
            component: <Empty />
        },
        {
            key: 5,
            component: <Empty />
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