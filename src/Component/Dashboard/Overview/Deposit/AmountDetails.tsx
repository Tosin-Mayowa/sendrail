import {
 Button, FormControl, FormLabel, Grid, Input, useMediaQuery 
} from '@chakra-ui/react';
import React from 'react'


type AmountDetailsProps = {
    onPaymentModalOpen: () => void
}
export function AmountDetails({ onPaymentModalOpen }: AmountDetailsProps): JSX.Element {
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