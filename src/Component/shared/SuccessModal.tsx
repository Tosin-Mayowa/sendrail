import {
    Box, Button, Flex, Image, Modal, ModalBody, ModalContent, ModalOverlay, Text
} from '@chakra-ui/react'
import React from 'react'
import green_tick from '../../Asset/green-tick.png'

interface Props {
    onClose: () => void,
    isOpen: boolean,
    text?: string
    callback?: () => void
}
function SuccessModal({
    onClose, isOpen, text, callback
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
                        <Image src={green_tick} alt="Success" w="20%" />
                        <Box
                            color="#27AE60"
                            fontSize="22px"
                            fontWeight="700"
                        >
                            {text}
                        </Box>
                        <Button
                            backgroundColor="#27EA60"
                            color="#fff"
                            w="30%"

                            _hover={{

                            }}

                            onClick={callback ? () => { onClose(); callback(); } : onClose}
                        >
                            Continue
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
SuccessModal.defaultProps = {
    text: (
        <>
            <Text>
                Thank you for your request.
            </Text>
            <Text>
                We are working hard to find the best service.
            </Text>
        </>
    ),
    callback: () => { }
}
export default SuccessModal