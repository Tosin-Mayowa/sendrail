import { TabPanel, TabPanels, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Overview from './Overview/Overview'

const Empty: React.FC = () => {
    return (
        <>
            <Text>Not Yet Implemented</Text>
        </>
    )
}

const DashTabs: React.FC = () => {
    const [panels] = useState<any>([
        <Overview />,
        <Empty />,
        <Empty />,
        <Empty />,
        <Empty />,
        <Empty />,
        <Empty />,
        <Empty />,
        <Empty />
    ])
    return (
        <TabPanels
            mt="90px"
        >
            {
                panels.map((item: any) => (
                    <TabPanel key={Math.random()}>
                        {item}
                    </TabPanel>
                ))
            }
        </TabPanels>
    )
}

export default DashTabs