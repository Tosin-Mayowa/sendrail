import {
    Box, Flex, Modal, ModalBody, ModalContent, ModalOverlay, Text
} from '@chakra-ui/react'
import React from 'react'
import CustomButton from './CustomButton'

interface Props {
    onClose: () => void,
    isOpen: boolean,
    question?: string,
    confirm_btn_text?: string,
    confirm_btn_func: () => void,
}
function ConfirmRequestModal({
    onClose, isOpen,
    question,
    confirm_btn_text,
    confirm_btn_func
}: Props): JSX.Element {
    return (
        <Modal
            blockScrollOnMount
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
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
                    <Flex flexDirection="column" justifyContent="center" h="100%" placeItems="center" textAlign="center" gap="20px">
                        <Box
                            color="#4A4A4A"
                            fontSize="24px"
                            fontWeight="500"
                        >
                            <Text>
                                {question}?
                            </Text>
                        </Box>
                        <Flex
                            w="100%"
                            justifyContent="flex-end"
                            gap="10px"
                            my="25px"
                        >
                            <CustomButton text='Cancel' variant='outlined' onclick={onClose} />
                            <CustomButton text={confirm_btn_text} variant='filled' onclick={confirm_btn_func} />
                        </Flex>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
ConfirmRequestModal.defaultProps = {
    question: "Are you sure you want to continue with this",
    confirm_btn_text: "Continue"
}
export default ConfirmRequestModal