import { SmallAddIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { OverviewStates } from '../../../../Contexts/OverviewContext'
import RoundedBackButton from '../../../shared/RoundedBackButton'
import SuccessModal from '../../../shared/SuccessModal'
import AddCard from './AddCard'

const Index = (): JSX.Element => {
    const { views, dispatchView } = OverviewStates()
    const [tabs] = useState<string[]>(["Debit Card", "Bank Account"])
    const [cards, setcards] = useState([])
    const { isOpen, onOpen, onClose }: { isOpen: boolean, onOpen: () => void, onClose: () => void } = useDisclosure()
    return (
        <Grid
            placeItems="center"
            padding="0px 40px"
        >
            <SuccessModal isOpen={isOpen} onClose={onClose} />
            <Box w="100%">
                <RoundedBackButton color='#070529' onclick={() => { dispatchView({ type: "change_overview_view", current_view: views.initial_view }) }} />
            </Box>
            <Text as="h1" w="100%" my="20px" fontSize="24px" fontWeight="600">
                Deposit with Card/Account
            </Text>
            <Grid
                placeItems="center"
                w="80%"
                my="15px"
                padding="20px"
                backgroundColor="#07052912"
            >
                <Tabs
                    variant="unstyled"
                >
                    <TabList>
                        <Flex justifyContent="center" w="100%">
                            {
                                tabs?.map((e) => (
                                    <Tab
                                        key={e}
                                        fontSize="18px"
                                        fontWeight="500"

                                        _selected={{
                                            fontSize: "20px",
                                            fontWeight: "700",
                                            borderBottom: "4px solid #F9C567"

                                        }}
                                    >
                                        {e}
                                    </Tab>
                                ))
                            }
                        </Flex>
                    </TabList>
                    <Box w="100%" fontSize="20px" fontWeight="400">
                        <Text color="#ABA7A7" mt="15px">
                            In order to guarantee your funds security. you can only add the bank card linked to your BVN
                        </Text>
                        <Text color="#000">
                            Bvn:22****1245
                        </Text>
                    </Box>
                    <TabPanels>
                        <TabPanel>
                            {
                                cards?.length === 0 && <AddCard onOpen={onOpen} />
                            }
                        </TabPanel>
                        <TabPanel>
                            Bank Account
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Grid>
        </Grid>
    )
}

export default Index