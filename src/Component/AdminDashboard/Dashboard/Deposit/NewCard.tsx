import {
    Button, FormControl, FormLabel, Grid, Input, useDisclosure, useMediaQuery
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import Access from '../../../../Asset/access-bank.png'
import { setWithExpiry } from "../../../../lib/localStorage";
import SuccessModal from "../../../shared/SuccessModal";

type NewCardProps = {
    cards: any,
    setCards: any,
    setSection: Dispatch<SetStateAction<number>>
}
export function NewCard({ cards, setCards, setSection }: NewCardProps): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const { isOpen, onOpen, onClose }: { isOpen: boolean, onOpen: () => void, onClose: () => void } = useDisclosure()
    const payload = {
        image: Access,
        name: "Dray Savage rey",
        card: "09********65",
        bank: "Access Bank",
        key: cards?.length > 0 ? cards[cards?.length - 1].key + 1 : 1 // Just for testing, will be an actual ID after connecting to BE
    }
    const close = () => {
        onClose()
        setSection(1)
    }
    return (
        <form>
            <SuccessModal isOpen={isOpen} onClose={close} text="Debit Card Added" />
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
                        const data = cards ? cards : [] // :P
                        data.push(payload)
                        setWithExpiry("cards", data)
                        setCards(data)
                        onOpen()
                    }}
                >
                    Next
                </Button>
            </Grid>
        </form>
    )
}