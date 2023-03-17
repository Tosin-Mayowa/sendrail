import { Box, Grid, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import RoundedBackButton from '../../shared/RoundedBackButton'
import './styles.css'
import DashboardLayout from '../DashboardLayout'
import RidersPayroll from './RidersPayroll'
import PayrollHistory from './PayrollHistory'

function Index(): JSX.Element {
    const [tabs] = useState([
        "Riders Payroll", "Payroll History"
    ])

    return (
        <DashboardLayout>
            <Grid
                placeItems="center"
            >
                <Text as="h1" w="100%" my={{ base: "10px", md: "32px" }} fontSize="24px" fontWeight="600">
                    Payroll
                </Text>
                <Tabs variant="unstyled" w="100%">
                    <TabList>
                        {
                            tabs.map(e => (
                                <Tab
                                    p={0}
                                    key={e}
                                    fontSize={{ md: "16px", base: "14px" }}
                                    color="#595956"
                                    fontWeight="500"
                                    mr="48px"

                                    _selected={{
                                        py: "3px",
                                        color: "#1F1F1F",
                                        fontSize: { md: "18px", base: "16px" },
                                        fontWeight: "700",
                                        borderBottom: "4px solid #F9C567"
                                    }}
                                >
                                    {e}
                                </Tab>
                            ))
                        }
                    </TabList>
                    <TabPanels>
                        <TabPanel p={0}>
                            <RidersPayroll />
                        </TabPanel>
                        <TabPanel p={0}>
                            <PayrollHistory />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Grid>
        </DashboardLayout>
    )
}

export default Index