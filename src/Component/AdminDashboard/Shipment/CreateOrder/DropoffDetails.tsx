import { CalendarIcon, CheckIcon, SmallAddIcon, SmallCloseIcon, TimeIcon } from '@chakra-ui/icons';
import {
    Button, Flex, FormControl, FormLabel, Grid, Input, InputGroup, InputRightElement, Text, useDisclosure, useMediaQuery
} from '@chakra-ui/react'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import OrderConfirmModal from '../../../shared/OrderConfirmModal';

function DropoffDetails({ setSection }: { setSection: Dispatch<SetStateAction<string>> }): JSX.Element {
    const [isSmallerScreen] = useMediaQuery("(max-width: 860px)");
    const { isOpen, onOpen, onClose }: { isOpen: boolean, onOpen: () => void, onClose: () => void } = useDisclosure()

    return (
        <Grid
            w="100%"
            padding={{ base: "15px", md: "32px 48px" }}
            borderRadius="20px"
            backgroundColor="#07052912"
            color="#595956"
        >
            <OrderConfirmModal onClose={onClose} isOpen={isOpen} payment_amount={10000} fees={300} confirm_btn_func={() => { { } }} />
            <Text
                fontWeight="500"
                fontSize="20px"
            >
                Add drop-off details
            </Text>
            <form style={{ width: "100%" }}>
                <Grid
                    gridTemplateColumns={isSmallerScreen ? "1fr" : "1fr 1fr"}
                    rowGap="32px"
                    columnGap="24px"
                    my="32px"
                    placeItems="center"
                    fontWeight="500"
                    fontSize="16px"
                >
                    <FormControl>
                        <FormLabel mb="8px">Recipient&#39;s Name</FormLabel>
                        <Input
                            type='text'
                            placeholder="Enter a full name"
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel mb="8px">Recipient&#39;s Phone Number</FormLabel>
                        <Input
                            type='phone'
                            placeholder='Enter phone number'
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel mb="8px">Drop-Off location</FormLabel>
                        <Input
                            type='text'
                            placeholder='Enter a location'
                            background="#fff"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel mb="8px">Recipient&#39;s Drop-Off Code</FormLabel>
                        <Input
                            type='text'
                            placeholder='*****'
                            background="#fff"
                        />
                    </FormControl>

                    <Flex
                        gridColumn={!isSmallerScreen ? "1/3" : ""}
                        mt="16px    "
                        w="100%"
                        justifyContent="flex-end"
                        columnGap="100px"
                    >
                        <Button
                            borderRadius="4px"
                            onClick={() => { setSection("create-order") }}
                            size="lg"
                            variant="outline"
                            border="1px solid #ABA7A7"

                            _hover={{}}
                        >
                            Previous
                        </Button>

                        <Button
                            borderRadius="4px"
                            onClick={() => { onOpen() }}
                            size="lg"
                            background="#06008926"
                            color="#fff"

                            _hover={{}}
                        >
                            Next
                        </Button>

                    </Flex>

                </Grid>
            </form>
        </Grid>
    )
}

export default DropoffDetails