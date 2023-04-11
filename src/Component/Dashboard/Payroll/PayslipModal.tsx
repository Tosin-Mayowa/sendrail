import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {  Button, Flex, Grid, Image, Modal, ModalBody, ModalContent, ModalOverlay, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import Logo from '../../../Asset/Logos/Onboarding/SENDRAILS.png'
import CustomButton from '../../shared/CustomButton';

interface Props {
    isOpen: boolean,
    onClose: () => void,
    details: any
}

const PayslipModal = ({ isOpen, onClose, details }: Props): JSX.Element => {
    const [isSmallScreen] = useMediaQuery("(max-width: 720px)")
    return (
        <Modal
            blockScrollOnMount
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent
                minW="32%"
                height="100vh"
                position="fixed"
                borderRadius="20px"
                p={{ base: "10px 5px", md: "15px" }}
                background="#fff"
                color="#070529"
                overflowY="scroll"

                className='slip-scrollbar'
            >
                <ModalBody>
                    <Flex justifyContent="space-between">
                        <Flex columnGap="5px">
                            <Image src={Logo} alt="Logo" style={{ aspectRatio: "1/1" }} />
                            <Text
                                fontWeight="500"
                                fontSize={{ base: "20px", md: "24px" }}
                                lineHeight="29px"
                                display="flex"
                                alignItems="center"
                                textAlign="right"
                                color="#070529">
                                Sendrail
                            </Text>
                        </Flex>
                        <RiCloseCircleLine size="25" onClick={onClose} cursor="pointer" />
                    </Flex>
                    <Flex
                        columnGap="0px"
                        alignItems="center"
                        my="20px"
                        fontWeight="500"
                        fontSize="18px"
                    >
                        <ChevronLeftIcon boxSize={30} cursor="pointer" transition="0.1s" _hover={{ transform: "translateX(-3px)" }} />
                        <Text>10,Dec,2022</Text>
                        <ChevronRightIcon boxSize={30} cursor="pointer" transition="0.1s" _hover={{ transform: "translateX(3px)" }} />
                    </Flex>
                    <Grid
                        placeItems="center"
                        fontSize={{ base: "14px", md: "18px" }}
                        fontWeight="500"
                        color="#000"
                    >
                        <CustomButton text="Rider's information" size={isSmallScreen ? "sm" : 'lg'} />
                        <Grid
                            my="25px"
                            width="100%"
                            gridTemplateColumns="1fr 1fr"
                        >
                            <Grid
                                fontWeight="600"
                                color="#ABA7A7"
                                rowGap="20px"
                            >
                                <Text>Name:</Text>
                                <Text>Designation:</Text>
                                <Text>Rider ID:</Text>
                            </Grid>
                            <Grid rowGap="20px">
                                <Text>{details?.name}</Text>
                                <Text>Rider</Text>
                                <Text>SNDR/22/109</Text>
                            </Grid>
                        </Grid>
                        <CustomButton text="Payment Details" size={isSmallScreen ? "sm" : 'lg'} />
                        <Grid
                            maxW="80%"
                            my="25px"
                            width="100%"
                            gridTemplateColumns="1fr 1fr"
                        >
                            <Grid
                                fontWeight="600"
                                color="#ABA7A7"
                                rowGap="20px"
                            >
                                <Text>Pay Date:</Text>
                                <Text>Payroll ID:</Text>
                                <Text>Tax ID:</Text>
                                <Text>Pension ID:</Text>
                            </Grid>
                            <Grid rowGap="20px">
                                <Text>10-12-2022</Text>
                                <Text>#11122890</Text>
                                <Text>#11122890</Text>
                                <Text>#11122890</Text>
                            </Grid>
                        </Grid>
                        <CustomButton text="Earnings" size={isSmallScreen ? "sm" : 'lg'} />
                        <Grid
                            maxW="80%"
                            my="25px"
                            width="100%"
                            gridTemplateColumns="1fr 1fr"
                        >
                            <Grid
                                fontWeight="600"
                                color="#ABA7A7"
                                rowGap="20px"
                            >
                                <Text>Basic Salary:</Text>
                                <Text>Utility:</Text>
                                <Text>Bonus:</Text>
                            </Grid>
                            <Grid rowGap="20px">
                                <Text>₦60,000.00</Text>
                                <Text>₦5,000.00</Text>
                                <Text>₦5,000.00</Text>
                            </Grid>
                        </Grid>
                        <Grid
                            w="80%"
                            gridTemplateColumns="1fr 1fr"
                            background="#07052912"
                            padding="4px 8px"
                        >
                            <Text
                                color="#ABA7A7"
                                fontWeight="600"
                            >
                                Total:
                            </Text>
                            <Text>
                                ₦60,000.00
                            </Text>
                        </Grid>
                        <Text
                            my="30px"
                            color="#ABA7A7"
                            fontSize="14px"
                            textAlign="center"
                        >
                            For questions and enquires, send a mail to support@sendrail.com
                        </Text>
                        <Button onClick={() => alert("Rest, Not yet implemented")}>
                            Download Payslip
                        </Button>
                    </Grid>
                </ModalBody>
            </ModalContent>
        </Modal >
    )
}

export default PayslipModal