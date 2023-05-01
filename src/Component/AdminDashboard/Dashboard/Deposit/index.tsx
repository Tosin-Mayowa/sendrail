import { SmallAddIcon } from '@chakra-ui/icons'
import {
    Box, Flex, Grid, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, useMediaQuery
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getWithExpiry, setWithExpiry } from '../../../../lib/localStorage'
import PaymentConfirmModal from '../../../shared/PaymentConfirmModal'
import RoundedBackButton from '../../../shared/RoundedBackButton'
import DashboardLayout from '../../DashboardLayout'
import AddCard from './AddCard'
import { BankAccount } from './BankAccount'
import { Card } from './Card'

function Index(): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const balance = getWithExpiry("balance") || 1250
    const navigate = useNavigate()
    const [tabs] = useState<string[]>(["Debit Card", "Bank Account"])
    // 1 -- Default screen
    // 2 -- card-details
    // 3 -- deposit details
    const [section, setSection] = useState<number>(1)
    type CardType = {
        image: string,
        name: string,
        card: string,
        bank: string,
        key: number
    }[]
    const [cards, setCards] = useState<CardType>(getWithExpiry("cards"))
    const paymentConfirmModal = useDisclosure()
    const [isPaymentModalOpen, onPaymentModalOpen, onPaymentModalClose]: [isPaymentModalOpen: boolean, onPaymentModalOpen: () => void, onPaymentModalClose: () => void] = [paymentConfirmModal.isOpen, paymentConfirmModal.onOpen, paymentConfirmModal.onClose]
    const depositCallback = () => {
        setWithExpiry("balance", balance + 60000) // Will be the amount in production
        navigate("/dashboard")
    }
    return (
        <DashboardLayout>
            <Grid
                placeItems="center"
            >
                <PaymentConfirmModal isPaymentModalOpen={isPaymentModalOpen} onPaymentModalClose={onPaymentModalClose} callback={depositCallback} />
                <Box w="100%" mt={{ base: "10px", md: "42px" }}>
                    <RoundedBackButton color='#040320' />
                </Box>
                <Text as="h1" w="100%" fontSize={{ sm: "18px", md: "24px" }} fontWeight="600" m={{ base: "10px  0px", md: "42px 0px 48px" }} color="#000">
                    Deposit with Card/Account
                </Text>
                <Grid
                    placeItems="center"
                    w={isSmallerScreen ? "100%  " : "80%"}
                    my="15px"
                    padding="30px"
                    borderRadius="20px"
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
                                            fontSize={isSmallerScreen ? "16px" : "18px"}
                                            fontWeight="500"

                                            _selected={{
                                                fontSize: isSmallerScreen ? "18px" : "20px",
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
                        <Box w="100%" fontSize={isSmallerScreen ? "14px" : "20px"} fontWeight="400" textAlign={isSmallerScreen ? "center" : "left"}>
                            <Text color="#ABA7A7" mt="15px">
                                In order to guarantee your funds security. you can only add the bank card linked to your BVN
                            </Text>
                            <Text color="#000">
                                Bvn: 22****1245
                            </Text>
                        </Box>
                        <TabPanels>
                            <TabPanel>
                                {
                                    cards?.length > 0 && section === 1 ?
                                        <>
                                            {cards?.map((card) => (
                                                <Card card={card} setSection={setSection} key={card?.key} />)
                                            )}
                                            <Grid
                                                placeItems="center"
                                                w="100%"
                                                color="#F9C567"
                                                fontWeight="700"
                                                fontSize={isSmallerScreen ? "14px" : "18px"}
                                                gridTemplateColumns="auto auto"
                                                justifyContent="center"
                                                cursor="pointer"
                                                key={Math.random()}

                                                onClick={() => { setSection(2) }}
                                            >
                                                <SmallAddIcon boxSize="25px" /><Text>Add A Debit Card For This Transaction</Text>
                                            </Grid>
                                        </>
                                        :
                                        <AddCard
                                            details={{ section, setSection, cards, setCards }}
                                            onPaymentModalOpen={onPaymentModalOpen}
                                        />
                                }
                            </TabPanel>
                            <TabPanel>
                                <BankAccount onPaymentModalOpen={onPaymentModalOpen} />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Grid>
            </Grid>
        </DashboardLayout>
    )
}

export default Index