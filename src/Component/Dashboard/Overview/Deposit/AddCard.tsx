import { SmallAddIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, FormControl, FormLabel, Grid, Image, Input, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import Access from '../../../../Asset/access-bank.png'
import { OverviewStates } from '../../../../Contexts/OverviewContext'


interface AddProps {
    onOpen: () => void,
    cards_details: {
        cards: {
            image: string,
            name: string,
            card: string,
            bank: string,
            key: number
        }[],
        setCards: any
    },
    onPaymentModalOpen: () => void
}
const AddCard: React.FC<AddProps> = ({ onOpen, cards_details, onPaymentModalOpen }) => {
    const { views } = OverviewStates();

    const fetchView = () => {
        if (views.current_view === "deposit-2") {
            return <NewCard onOpen={onOpen} cards_details={cards_details} />
        } else if (views.current_view === "deposit-3") {
            return <AmountDetails onPaymentModalOpen={onPaymentModalOpen} />
        }
        return <NoCard />
    }
    return (
        fetchView()
    )
}

type newCard = {
    onOpen: () => void,
    cards_details: {
        cards: {
            image: string,
            name: string,
            card: string,
            bank: string,
            key: number
        }[],
        setCards: any
    },
}
const NewCard = ({ onOpen, cards_details }: newCard): JSX.Element => {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const { cards, setCards } = cards_details
    const { dispatchView } = OverviewStates();
    let payload = {
        image: Access,
        name: "Dray Savage rey",
        card: "09********65",
        bank: "Access Bank",
        key: cards[cards.length - 1] ? cards[cards.length - 1]?.key + 1 : 1
    }
    return (
        <form>
            <Grid gridTemplateColumns={isSmallerScreen ? "1fr" : "1fr 1fr"} gap="15px" my="15px" placeItems="center">
                <FormControl>
                    <FormLabel color="#ABA7A7">Email</FormLabel>
                    <Input
                        type='email'
                        placeholder="admin@sendrails.com"
                        border="1px solid #ABA7A7"
                        background="#fff"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel color="#ABA7A7">Card</FormLabel>
                    <Input
                        type='text'
                        placeholder='5399 9219 3291 1819'
                        border="1px solid #ABA7A7"
                        background="#fff"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel color="#ABA7A7">MM/YY</FormLabel>
                    <Input
                        type='text'
                        placeholder='12/29'
                        border="1px solid #ABA7A7"
                        background="#fff"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel color="#ABA7A7">CCV</FormLabel>
                    <Input
                        type='text'
                        placeholder='123'
                        border="1px solid #ABA7A7"
                        background="#fff"
                    />
                </FormControl>
                <Button
                    gridColumn={!isSmallerScreen ? "1/3" : ""}
                    w="max-content"
                    border="1px solid #ABA7A7"
                    borderRadius="4px"
                    onClick={() => {
                        let data = cards
                        data.push(payload)
                        setCards(data)
                        dispatchView({ type: "change_overview_view", current_view: "deposit-1" })
                        onOpen()
                    }}
                >
                    Next
                </Button>
            </Grid>
        </form>
    )
}

type AmountDetails = {
    onPaymentModalOpen: () => void
}
const AmountDetails = ({ onPaymentModalOpen }: AmountDetails): JSX.Element => {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");

    return (
        <form>
            <Grid gridTemplateColumns={isSmallerScreen ? "1fr" : "1fr 1fr"} gap="15px" my="15px" placeItems="center">
                <FormControl>
                    <FormLabel color="#ABA7A7">Amount[Naira]</FormLabel>
                    <Input
                        type='number'
                        placeholder="Enter Deposit amount"
                        border="1px solid #ABA7A7"
                        background="#fff"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel color="#ABA7A7">Card PIN</FormLabel>
                    <Input
                        type='number'
                        placeholder='****'
                        border="1px solid #ABA7A7"
                        background="#fff"
                    />
                </FormControl>
                <Button
                    gridColumn={!isSmallerScreen ? "1/3" : ""}
                    w="max-content"
                    border="1px solid #ABA7A7"
                    borderRadius="4px"
                    onClick={onPaymentModalOpen}
                >
                    Next
                </Button>
            </Grid>
        </form>
    )
}

const NoCard = (): JSX.Element => {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const { dispatchView } = OverviewStates();

    return (
        <Grid placeItems="center">
            <Grid
                placeItems="center"
                backgroundColor="#FFFFFF"
                w={isSmallerScreen ? "90%" : "70%"}
                color="#F9C567"
                fontWeight="700"
                fontSize={isSmallerScreen ? "12px" : "18px"}
                padding={isSmallerScreen ? "15px" : "45px"}
                borderRadius="10px"
                gridTemplateColumns="auto auto"
                justifyContent="center"
                cursor="pointer"

                onClick={() => dispatchView({ type: "change_overview_view", current_view: "deposit-2" })}
            >
                <SmallAddIcon boxSize="25px" /><Text>Add A Debit Card For This Transaction</Text>
            </Grid>
        </Grid>
    )
}

type cardType = {
    card: {
        image: string,
        name: string,
        card: string,
        bank: string,
        key: number
    }
}
export const Card = ({ card }: cardType): JSX.Element => {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const { dispatchView } = OverviewStates();

    return (
        <Grid placeItems="center">
            <Flex
                alignItems="center"
                width={isSmallerScreen ? "100%" : "50%"}
                backgroundColor="#fff"
                boxShadow="0px 8px 40px rgba(6, 0, 137, 0.1)"
                borderRadius="9px"
                padding={isSmallerScreen ? "10px" : "15px"}
                my="10px"
                cursor="pointer"

                onClick={() => { dispatchView({ type: "change_overview_view", current_view: "deposit-3" }) }}
            >
                <Box mx="5px" borderRadius="50%" style={{ aspectRatio: "1/1" }}>
                    <Image src={card?.image} alt="" />
                </Box>
                <Grid color="#656566">
                    <Text fontSize={isSmallerScreen ? "14px" : "18px"} fontWeight="500" color="#040320">{card.name}</Text>
                    <Text fontSize="12px" fontWeight="450">{card.card}</Text>
                    <Text fontSize="12px" fontWeight="450">{card.bank}</Text>
                </Grid>
            </Flex>
        </Grid>
    )
}

export default AddCard