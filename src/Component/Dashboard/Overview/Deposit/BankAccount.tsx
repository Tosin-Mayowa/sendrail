import { Box, Button, FormControl, FormLabel, Grid, Input, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../../../shared/SearchBar";

type BankAccountProps = {
    onPaymentModalOpen: () => void
}
export function BankAccount({ onPaymentModalOpen }: BankAccountProps): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    return (
        <form>
            <Grid gridTemplateColumns={isSmallerScreen ? "1fr" : "1fr 1fr"} gap="15px" my="15px" placeItems="center">
                <Box gridColumn={!isSmallerScreen ? "1/3" : ""} w="100%">
                    <SearchBar placeholder='Search by bank' width='100%' />
                </Box>
                <FormControl>
                    <FormLabel color="#ABA7A7">Bank</FormLabel>
                    <Input
                        type='text'
                        placeholder="Access Bank"
                        border="1px solid #ABA7A7"
                        background="#fff"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel color="#ABA7A7">Account Number</FormLabel>
                    <Input
                        type='number'
                        placeholder='1234567890'
                        border="1px solid #ABA7A7"
                        background="#fff"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel color="#ABA7A7">Amount</FormLabel>
                    <Input
                        type='number'
                        placeholder='#60,000'
                        border="1px solid #ABA7A7"
                        background="#fff"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel color="#ABA7A7">Transaction Pin</FormLabel>
                    <Input
                        type='text'
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