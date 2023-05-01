import {
    Box, Flex, Grid, Image, Modal, ModalBody, ModalContent, ModalOverlay, Text
} from '@chakra-ui/react'
import React from 'react'
import CustomButton from './CustomButton'
import icon from '../../Asset/order_icon_light.png'
import CustomCheckbox from './CustomCheckbox'


interface Props {
    onClose: () => void,
    isOpen: boolean,
    payment_amount: number,
    fees: number,
    confirm_btn_func: () => void,
}
function OrderConfirmModal({
    onClose, isOpen,
    payment_amount,
    fees,
    confirm_btn_func
}: Props): JSX.Element {
    return (
        <Modal
            blockScrollOnMount
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            motionPreset='slideInBottom'
        >
            <ModalOverlay />
            <ModalContent
                ml="276px"
                minW="600px"
                position="fixed"
                borderRadius="20px"
                p="15px"
                background="#fff"
                color="#070529"

                style={{
                    aspectRatio: "3/2"
                }}
            >
                <ModalBody>
                    <Flex flexDirection="column" justifyContent="center" h="100%" placeItems="center" textAlign="center" gap="20px">
                        <Flex
                            mt="29px"
                            background="#000"
                            color="#fff"
                            alignItems="center"
                            columnGap="20px"
                            fontSize="20px"
                            fontWeight="700"
                            p="10px 24px"
                            borderRadius="20px"
                        >
                            <Image src={icon} alt="" />
                            <Text>Order Confirmation</Text>
                        </Flex>
                        <Grid
                            placeItems="center"
                            width="450px"
                            padding="32px"
                            border="1px dashed #ABA7A7"
                            borderRadius="20px"
                            color="#000000"
                            fontWeight="700"
                            fontSize="24px"
                            rowGap="20px"
                        >
                            <Flex
                                alignItems="center"
                                justifyContent="center"
                                columnGap="8px"
                                border="2px solid #0600891A"
                                p="18px 16px"
                                borderRadius="20px"
                            >
                                <Text fontWeight="500" fontSize="18px">Order payment</Text>
                                <Box
                                    width="2px"
                                    height="38px"
                                    background="#0600891A"
                                />
                                <Text>₦ 10,000.00</Text>
                            </Flex>
                            <Flex
                                alignItems="center"
                                justifyContent="center"
                                columnGap="20px"
                                border="2px solid #0600891A"
                                p="18px 16px"
                                borderRadius="20px"
                            >
                                <Text fontWeight="500" fontSize="18px">Fees</Text>
                                <Box
                                    width="2px"
                                    height="38px"
                                    background="#0600891A"
                                />
                                <Text>₦ 300.00</Text>
                            </Flex>
                            <Flex alignItems="center" columnGap="24px">
                                <CustomCheckbox />
                                <Text color="#595956" fontSize="18px" fontWeight="500">
                                    Save as customer
                                </Text>
                            </Flex>
                        </Grid>
                        <Flex
                            w="100%"
                            justifyContent="space-around"
                            // gap="10px"
                            my="35px"
                        >
                            <CustomButton text='Cancel' variant='outlined' onclick={onClose} />
                            <CustomButton text="Confirm" variant='filled' onclick={confirm_btn_func} />
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
export default OrderConfirmModal