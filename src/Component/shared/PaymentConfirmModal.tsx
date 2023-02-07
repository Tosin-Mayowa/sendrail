import { Box, Button, Flex, Grid, Modal, ModalBody, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import SuccessModal from './SuccessModal'

interface Props {
    onPaymentModalClose: () => void,
    isPaymentModalOpen: boolean,
    callback?: () => void
    //data?: {}[]  will consist of payment information gotten from user inputs and it will replace the data being rendered
}
const PaymentConfirmModal: React.FC<Props> = ({ onPaymentModalClose, isPaymentModalOpen, callback }) => {
    const { isOpen, onOpen, onClose }: { isOpen: boolean, onOpen: () => void, onClose: () => void } = useDisclosure()
    const closeModal = () => {
        onPaymentModalClose();
        callback && callback()
    }
    return (
        <Modal
            blockScrollOnMount={true}
            isOpen={isPaymentModalOpen}
            onClose={onPaymentModalClose}
            isCentered
        >
            <SuccessModal isOpen={isOpen} onClose={onClose} callback={closeModal} />
            <ModalOverlay />
            <ModalContent
                minW="45%"
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
                    <Flex flexDirection="column" h="100%" gap="5px">
                        <Box alignSelf="flex-end" cursor="pointer" onClick={onPaymentModalClose}>
                            <RiCloseCircleLine size="25" />
                        </Box>
                        <Text
                            color="#F9C567"
                            fontSize="18px"
                            fontWeight="600"
                        >
                            Confirmation
                        </Text>
                        <Text fontSize="16px" fontWeight="500">
                            Confirm the transfer details are correct before proceeding.
                            Successful transfers cannot be reversed.
                        </Text>
                        <Grid
                            my="10px"
                            alignSelf="center"
                            w="70%"
                            gridTemplateColumns="50% 50%"
                            rowGap="30px"
                            fontSize="16px"
                            fontWeight="500"
                            color="#595956"
                        >
                            <Text color="#ABA7A7" fontWeight="600">Name</Text>
                            <Text>Drey Savage Rae</Text>
                            <Text color="#ABA7A7" fontWeight="600">Bank</Text>
                            <Text>Access Bank</Text>
                            <Text color="#ABA7A7" fontWeight="600">Card</Text>
                            <Text>09********65</Text>
                            <Text color="#ABA7A7" fontWeight="600">Amount</Text>
                            <Text>#60,000</Text>
                        </Grid>
                        <Button
                            alignSelf="center"
                            backgroundColor="#070529E5"
                            color="#fff"
                            w="30%"
                            my="15px"

                            _hover={{

                            }}

                            onClick={() => {
                                onOpen();// Process Payment before opening modal, Either failed modal or success
                            }}
                        >
                            Continue
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default PaymentConfirmModal