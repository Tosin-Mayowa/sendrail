import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Grid, Image, Modal, ModalBody, ModalContent, ModalOverlay, Text, useMediaQuery } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import SendRailLogo from '../../shared/SendRailLogo';

interface Props {
    isOpen: boolean,
    onClose: () => void,
    details: any
}

const PayslipModal = ({ isOpen, onClose, details }: Props): JSX.Element => {
    const slipref = useRef<HTMLElement>(null)
    const [slipChange, setSlipChange] = useState(null)

    useEffect(() => {
        if (isOpen) {
            slipref.current.scrollTop = 0;
        }
    }, [slipChange])

    return (
        <Modal
            blockScrollOnMount
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent
                ref={el => { slipref.current = el; setSlipChange(el) }}
                ml="276px"
                minW="32%"
                height="100vh"
                position="fixed"
                borderRadius="10px"
                p={{ base: "10px 5px", md: "15px" }}
                background="#fff"
                color="#070529"
                overflowY="scroll"

                className='slip-scrollbar'
            >
                <Grid
                    ml="-20px"
                    maxW="32%"
                    position="fixed"
                    h="100%"
                    placeItems="center"
                    overflow="hidden"
                >
                    <Box
                        opacity="0.05"
                        transform="rotate(-45deg)"
                    >
                        <SendRailLogo md_size="120px" />
                    </Box>
                </Grid>
                <ModalBody position="relative">
                    <Flex
                        // w="100%"
                        // border="1px solid red"
                        justifyContent="space-between"
                    // position="fixed"
                    >
                        <SendRailLogo md_size="25px" />
                        <RiCloseCircleLine size="25" onClick={onClose} cursor="pointer" />
                    </Flex>
                    <Flex
                        columnGap="0px"
                        alignItems="center"
                        my="30px"
                        fontWeight="500"
                        fontSize="18px"
                    >
                        <ChevronLeftIcon boxSize={30} cursor="pointer" transition="0.1s" _hover={{ transform: "translateX(-3px)" }} />
                        <Text>10,Dec,2022</Text>
                        <ChevronRightIcon boxSize={30} cursor="pointer" transition="0.1s" _hover={{ transform: "translateX(3px)" }} />
                    </Flex>
                    <Grid
                        placeItems="center"
                        border="1px dashed #595956"
                        borderRadius="10px"
                        padding="25px"
                        color="#000000"
                        fontSize="16px"
                        fontWeight="500"
                    >
                        <Text fontSize="18px" fontWeight="700">Courier's Information</Text>
                        <Box w="100%" mt="10px" mb="40px">
                            <KeyValue title="Name" value="Micheal miracle" />
                            <KeyValue title="Designation" value="Rider" />
                            <KeyValue title="Rider ID" value="SNDR/22/109" />
                        </Box>
                        <Text fontSize="18px" fontWeight="700">Payment Details</Text>
                        <Box w="100%" mt="10px" mb="40px">
                            <KeyValue title="Pay date" value="10-12-2022" />
                            <KeyValue title="Payroll ID" value="#11122890" />
                            <KeyValue title="Tax ID" value="#11122890" />
                            <KeyValue title="Pension ID" value="#11122890" />
                        </Box>
                        <Text fontSize="18px" fontWeight="700">Earnings</Text>
                        <Box w="100%" mt="10px" mb="40px">
                            <KeyValue title="Basic salary" value="₦ 60,000" />
                            <KeyValue title="Utility" value="₦ 0.00" />
                            <KeyValue title="Bonus" value="₦ 0.00" />
                            <Flex
                                my="4px"
                                w="100%"
                                justifyContent="space-between"
                                background="#07052912"
                                padding="4px 8px"
                                borderRadius="4px"
                            >
                                <Text fontWeight="600">Total </Text>
                                <Text
                                    color="#595956"
                                    fontWeight="400">
                                    ₦60,000.00
                                </Text>
                            </Flex>
                        </Box>
                    </Grid>
                    <Grid
                        placeItems="center"
                    >
                        <Text
                            my="30px"
                            color="#ABA7A7"
                            fontSize="14px"
                            textAlign="center"
                        >
                            For questions and enquires, send a mail to support@sendrail.com
                        </Text>
                        <Button
                            background="transparent"
                            border="1px solid #F9C567"

                            _hover={{}}
                            onClick={() => alert("Rest, Not yet implemented")}>
                            Download Payslip
                        </Button>
                    </Grid>
                </ModalBody>
            </ModalContent>
        </Modal >
    )
}

export default PayslipModal

const KeyValue = ({ title, value }): JSX.Element => {
    return (
        <Flex w="100%" justifyContent="space-between" py="13px" borderBottom="1px dashed #595956" >
            <Text>{title}</Text>
            <Text
                color="#595956"
                fontWeight="400"
            >{value}</Text>
        </Flex>
    )
}