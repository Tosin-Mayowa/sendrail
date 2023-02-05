import { SmallAddIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, FormControl, FormLabel, Grid, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { OverviewStates } from '../../../../Contexts/OverviewContext'
import Access from '../../../../Asset/access-bank.png'


interface AddProps {
    onOpen: () => void,
    deposit_views: {
        view: string,
        setView: any
    },
    cards_details: {
        cards: {
            image: string,
            name: string,
            card: string,
            bank: string
        }[],
        setCards: any
    }
}
const AddCard: React.FC<AddProps> = ({ onOpen, deposit_views, cards_details }) => {
    const { view, setView } = deposit_views
    // const { cards, setCards } = cards_details
    // {
    //     image: Access,
    //     name: "Dray Savage rey",
    //     card: "533******************03",
    //     bank: "Access Bank"
    // },
    // {
    //     image: Access,
    //     name: "Dray Savage rey",
    //     card: "533******************03",
    //     bank: "Access Bank"
    // }
    const fetchView = () => {
        if (view === "details") {
            return <NewCard onOpen={onOpen} cards_details={cards_details} setView={setView} />
        }
        return <NoCard setView={setView} />
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
            bank: string
        }[],
        setCards: any
    },
    setView: any
}
const NewCard = ({ onOpen, cards_details, setView }: newCard): JSX.Element => {
    const { cards, setCards } = cards_details
    let payload = {
        image: Access,
        name: "Dray Savage rey",
        card: "533******************03",
        bank: "Access Bank"
    }
    return (
        <form>
            <Grid gridTemplateColumns="1fr 1fr" gap="15px" my="15px" placeItems="center">
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
                    gridColumn="1/3"
                    w="max-content"
                    border="1px solid #ABA7A7"
                    borderRadius="4px"
                    onClick={() => {
                        let data = cards
                        data.push(payload)
                        setCards(data)
                        setView("")
                        onOpen()
                    }}
                >
                    Next
                </Button>
            </Grid>
        </form>
    )
}

const NoCard = ({ setView }): JSX.Element => {

    return (
        <Grid placeItems="center">
            <Grid
                placeItems="center"
                backgroundColor="#FFFFFF"
                w="70%"
                color="#F9C567"
                fontWeight="700"
                fontSize="18px"
                padding="45px"
                borderRadius="10px"
                gridTemplateColumns="auto auto"
                justifyContent="center"
                cursor="pointer"

                onClick={() => setView("details")}
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
        bank: string
    },
    deposit_views: {
        view: string,
        setView: any
    }
}
export const Card = ({ card, deposit_views }: cardType): JSX.Element => {
    const { view, setView } = deposit_views
    return (
        <Grid placeItems="center">
            <Flex
                alignItems="center"
                width="50%"
                backgroundColor="#fff"
                boxShadow="0px 8px 40px rgba(6, 0, 137, 0.1)"
                borderRadius="9px"
                padding="15px"
                my="10px"
                cursor="pointer"
            >
                <Box mx="5px" borderRadius="50%" style={{ aspectRatio: "1/1" }}>
                    <Image src={card?.image} alt="" />
                </Box>
                <Grid color="#656566">
                    <Text fontSize="18px" fontWeight="500" color="#040320">{card.name}</Text>
                    <Text fontSize="12px" fontWeight="450">{card.card}</Text>
                    <Text fontSize="12px" fontWeight="450">{card.bank}</Text>
                </Grid>
            </Flex>
        </Grid>
    )
}

export default AddCard