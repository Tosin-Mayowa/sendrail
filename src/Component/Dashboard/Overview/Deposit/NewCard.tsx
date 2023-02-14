import {
 Button, FormControl, FormLabel, Grid, Input, useMediaQuery 
} from "@chakra-ui/react";
import React from "react";
import Access from '../../../../Asset/access-bank.png'
import { DashboardStates } from "../../../../Contexts/DashboardContext";

type NewCardProps = {
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
export function NewCard({ onOpen, cards_details }: NewCardProps): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const { cards, setCards } = cards_details
    const { dispatchView } = DashboardStates();
    const payload = {
        image: Access,
        name: "Dray Savage rey",
        card: "09********65",
        bank: "Access Bank",
        key: cards[cards.length - 1] ? cards[cards.length - 1].key + 1 : 1
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
                        const data = cards
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